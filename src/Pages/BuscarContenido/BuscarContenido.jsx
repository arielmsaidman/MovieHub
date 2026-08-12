import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useFetch } from "../../hooks/useFetch";
import Card from "../../Componentes/Card/Card";
import "./BuscarContenido.css";

const BuscarContenido = () => {
  const { search } = useContext(SearchContext);
  const { contenido, loading, error } = useFetch();

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (search.trim() === "") {
      setResultados([]);
      return;
    }

    const filtrados = contenido.filter((item) =>
      item.nombre.toLowerCase().includes(search.toLowerCase())
    );

    setResultados(filtrados);
  }, [search, contenido]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="contenido-container">
      {resultados.length > 0 ? (
        resultados.map((item) => (
          <Card
            key={item.id}
            data={item}
          />
        ))
      ) : (
        search.trim() !== "" && <h3>No se encontró contenido.</h3>
      )}
    </div>
  );
};

export default BuscarContenido;
