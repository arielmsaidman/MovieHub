// ¿Qué ventajas tiene?
// ✅ Evita repetir el mismo código en varios componentes.
// ✅ Hace que los componentes sean más limpios y fáciles de leer.
// ✅ Centraliza la lógica de obtención de datos.
// ✅ Permite manejar loading y error de forma consistente.
// ✅ Si necesitás cambiar cómo hacés las peticiones, lo hacés en un solo lugar.

import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../Componentes/firebase/firebase";

export const useFetch = () => {
  const [contenido, setContenido] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ultimoDoc, setUltimoDoc] = useState(null);

  const cargarPrimeraPagina = async () => {
    try {
      setLoading(true);

      const consulta = query(
        collection(db, "contenido"),
        limit(15)
      );

      const querySnapshot = await getDocs(consulta);

      const datos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setContenido(datos);

      setUltimoDoc(
        querySnapshot.docs[querySnapshot.docs.length - 1]
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const cargarSiguientePagina = async () => {
    if (!ultimoDoc) return;

    try {
      setLoading(true);

      const consulta = query(
        collection(db, "contenido"),
        startAfter(ultimoDoc),
        limit(15)
      );

      const querySnapshot = await getDocs(consulta);

      const datos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setContenido((prev) => [...prev, ...datos]);

      setUltimoDoc(
        querySnapshot.docs[querySnapshot.docs.length - 1]
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPrimeraPagina();
  }, []);

  return {
    contenido,
    loading,
    error,
    cargarPrimeraPagina,
    cargarSiguientePagina,
  };
};

// import { useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../Componentes/firebase/firebase";
// import { PendingActionsSharp } from "@mui/icons-material";

// export const useFetch = () => {
//   const [contenido, setContenido] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [ultimoDoc, setUltimoDoc]=useState(0);

//   useEffect(() => {
   
//     const fetchContenido = async () => {
//       try 
//       {
//         setLoading(true);
//         const querySnapshot = await getDocs(collection(db, "contenido"));
//         const datos = querySnapshot.docs.map((doc) => ({id: doc.id,...doc.data(),}));
//         setContenido(datos);
//       }

//       catch (error) 
//       {
//         setError(error.message);
//       } 
      
//       finally 
//       {
//         setLoading(false);
//       }
//     };

//     const cargarPrimeraPagina = async () => {
//       const querySnapshot = await firestore.collection('contenido').limit(16).get();
//       const productosArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setProductos(productosArray);
//       setUltimoDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
//     };

//     const cargarSiguientePagina = async () => {
//         if (!ultimoDoc) return;
//         const querySnapshot = await firestore.collection('productos').startAfter(ultimoDoc).limit(16).get();
//         const productosArray = querySnapshot.docs.map((d) => ({ id: doc.id, ...doc.data() }));
//         setProductos((prev) => [...prev, ...productosArray]);
//         setUltimoDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
//     };

//     fetchContenido();
//     cargarPrimeraPagina();
//   }, []);

//   return {
//     contenido,
//     loading,
//     error,

//     <div className="btn-group" role="group" aria-label="Basic example">
//       <button type="button" className="btn btn-primary" OnClick=(cargarPrimeraPagina)>Primera pagina</button>
//       <button type="button" className="btn btn-primary" OnClick=(cargarSiguientePagina>Siguiente pagina</button>
//     </div>

//   };
// };
