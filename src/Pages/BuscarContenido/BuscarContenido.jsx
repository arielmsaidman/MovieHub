import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import {collection, getDocs,} from "firebase/firestore";
import { db } from "../../Componentes/firebase/firebase";
import Card from "../../Componentes/Card/Card";
import "./BuscarContenido.css";

const BuscarContenido = () => {
  const { search } = useContext(SearchContext);

  const [contenido, setContenido] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarContenido = async () => {
      try {
        setLoading(true);
        setError("");

        const querySnapshot = await getDocs(
          collection(db, "contenido")
        );

        const datos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setContenido(datos);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    cargarContenido();
  }, []);

  const resultados = search.trim() === ""
    ? []
    : contenido.filter((item) =>
        item.nombre
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );

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
        search.trim() !== "" && (
          <h3>No se encontró contenido.</h3>
        )
      )}
    </div>
  );
};

export default BuscarContenido;
