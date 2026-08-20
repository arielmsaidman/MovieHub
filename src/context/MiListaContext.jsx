import React, {useState, createContext, useEffect} from 'react'
export const MiListaContext= createContext();
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../Componentes/firebase/firebase";


export const MiListaProvider = ({children}) => {

    const[MiLista, setMilista]=useState([]);

        useEffect(() => {

            const cargarMiLista = async () => {

                try {

                    const coleccion = collection(db, "miLista");

                    const snapshot = await getDocs(coleccion);

                    const lista = snapshot.docs.map((doc) => ({
                        idFirebase: doc.id,
                        ...doc.data()
                    }));

                    setMilista(lista);

                    console.log("✅ Mi Lista cargada:", lista);

                } catch (error) {

                    console.error("❌ Error cargando Mi Lista:", error);

                }
            };

            cargarMiLista();

        }, []);

    //todas las funciones que modifiquen a mi lista

    //agregar un item a mi lista
    const AddItem = async (item) => {
       
        if(IsInMiLista(item.id)){//pregunto si ya esta en mi lista
              alert("La película ya está en Mi Lista");
        return;
        }

        try { 
            const coleccion = collection(db, "miLista");

            const documento = await addDoc(coleccion, item);

            const nuevoItem = {
                ...item,
                idFirebase: documento.id
            };

            setMilista([...MiLista, nuevoItem]);
            // setMilista([...MiLista,item]); //si no esta lo agrego

            // // Agregar a Firebase
            // const coleccion = collection(db, "miLista");

            // await addDoc(coleccion, item);
            
            Toastify({
                text: "Agregado a Mi Lista!",
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "center",
                stopOnFocus: true,
                style: {
                background: "linear-gradient(to right, #EC1C1A, #b65704)",
                borderRadius: "5px",
                }
            }).showToast();

        } 
        
        catch (error) {
            console.error("❌ Error guardando en Firebase:", error);
        }
    }
 
    const IsInMiLista =(id) =>{
        return MiLista.some((prod)=>prod.id===id) //devuelve un booleano
    }

    //eliminar mi lista
    const Clear = async () => {

        try {

            const coleccion = collection(db, "miLista");

            const borrarlista = await getDocs(coleccion);

            // Eliminar todos los documentos de Firebase
            for (const documento of borrarlista.docs) {
                await deleteDoc(doc(db, "miLista", documento.id));
            }

            // Vaciar el estado de React
            setMilista([]);

            console.log("✅ Mi Lista vaciada");

        } catch (error) {
            console.error("❌ Error al vaciar Mi Lista:", error);
        }
    };

    const removeItem = async (id) => {

    try {

        const item = MiLista.find((prod) => prod.id === id);

        if (!item) {
                console.log("❌ No se encontró el elemento");
                return;
            }

            console.log("Elemento:", item);
            console.log("ID Firebase:", item.idFirebase);

            await deleteDoc(
                doc(db, "miLista", item.idFirebase)
            );

            setMilista(
                MiLista.filter((prod) => prod.id !== id)
            );

            console.log("✅ Elemento eliminado");

        } catch (error) {
            console.error("❌ Error al eliminar:", error);
        }
    };

    return (
        <MiListaContext.Provider 
            value={{
                MiLista, 
                removeItem,
                AddItem, 
                Clear
            }}
        >
            {children}
        </MiListaContext.Provider>
    )
}

// export default ItemsContext