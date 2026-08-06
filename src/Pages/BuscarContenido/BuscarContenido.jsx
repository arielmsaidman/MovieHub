import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import Card from "../../Componentes/Card/Card";
import "./BuscarContenido.css";

const BuscarContenido = () => {

    

    const { search } = useContext(SearchContext);

    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const buscarUsuarios = async () => {

            try {
                const response = await fetch(
                    import.meta.env.VITE_API_URL
                );
                const data = await response.json();

                const usuariosFiltrados = data.filter(usuario =>
                    usuario.login
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );

                setResultados(usuariosFiltrados);


            } catch(error) {

                console.log("Error buscando usuarios:", error);
            }
        };

        if(search.trim() !== ""){
            buscarUsuarios();
        } else {
            setResultados([]);
        }
    }, [search]);

    return (
        <div className="contenido-container">
            {resultados.length > 0 ? (
            resultados.map((usuario) => (
                <Card
                key={usuario.id}
                data={usuario}
                />
            ))
            ) : (
            <h3>No se encontraron usuarios.</h3>
            )}
        </div>
    );
    
};

export default BuscarContenido;

// import { useContext, useEffect, useState } from "react";
// import { SearchContext } from "../../context/SearchContext";
// import Card from "../../Componentes/Card/Card";
// import "./BuscarContenido.css";

// const BuscarContenido = () => {

//     const { search } = useContext(SearchContext);
//     const [resultados, setResultados] = useState([]);

//     useEffect(() => {

//         if(search.trim() === ""){
//             setResultados([]);
//             return;
//         }

//         const buscarContenido = async () => {

//             try {
//                 const response = await fetch(
//                     `https://api.themoviedb.org/3/search/multi?api_key=TU_API_KEY&query=${search}&language=es-ES`
//                 );

//                 const data = await response.json();

//                 // quitamos personas porque TMDB también devuelve actores/directores
//                 const contenidoFiltrado = data.results.filter(
//                     item => item.media_type === "movie" || item.media_type === "tv"
//                 );
//                 // setResultados(contenidoFiltrado);

//             } catch(error){
//                 console.log("Error buscando contenido:", error);
//             }
//         };
//         buscarContenido();
//     }, [search]);

//     return (

//         <div className="contenido-container">
//             {
//                 resultados.map((contenido)=>(
//                     <Card
//                         key={contenido.id}
//                         data={contenido}
//                     />
//                 ))
//             }
//         </div>
//     )
// }
// export default BuscarContenido;