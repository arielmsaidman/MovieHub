import React from 'react'
import FullList from '../../Componentes/FullList/FullList'
import MiLista from "../../Componentes/MiLista/MiLista";
import Navbar from "../../Componentes/Navbar/Navbar";
import { useFetch } from "../../hooks/useFetch";
import Paginacion from "../../Componentes/Paginacion/Paginacion"
import Loading from "../../Componentes/Loading/Loading";

const Home = () => {

  // const [miLista, setMiLista] = useState([]);
  const {contenido, loading, error, paginaActual, haySiguiente, siguientePagina, anteriorPagina,} = useFetch();

  const handleChange = (event) => {
    setGenero(event.target.value);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
        {/* <Navbar /> */}
        <FullList 
         contenido={contenido}
        loading={loading}
        error={error}/>
        
        <Paginacion
        paginaActual={paginaActual}
        haySiguiente={haySiguiente}
        siguientePagina={siguientePagina}
        anteriorPagina={anteriorPagina}
      />
       
    </div>
  )
}

export default Home