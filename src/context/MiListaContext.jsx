import React, {useState, createContext} from 'react'
export const MiListaContext= createContext();

export const MiListaProvider = ({children}) => {

    const[MiLista, setMilista]=useState([]);

    //todas las funciones que modifiquen a mi lista

    //agregar un item a mi lista
    const AddItem = (item) => {
        if(IsInMiLista(item.id)){//pregunto si ya esta en mi lista
              alert("La película ya está en Mi Lista");
        return;
        }
        
        setMilista([...MiLista,item]); //si no esta lo agrego
        
    }
 
    const IsInMiLista =(id) =>{
        return MiLista.some((prod)=>prod.id===id) //devuelve un booleano
    }

    //eliminar mi lista
    const Clear = () => {
        setMilista([]);
    }

    const removeItem = (id) => {
        setMilista(MiLista.filter((prod)=>prod.id !== id))
    }

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