// ¿Qué ventajas tiene?
// ✅ Evita repetir el mismo código en varios componentes.
// ✅ Hace que los componentes sean más limpios y fáciles de leer.
// ✅ Centraliza la lógica de obtención de datos.
// ✅ Permite manejar loading y error de forma consistente.
// ✅ Si necesitás cambiar cómo hacés las peticiones, lo hacés en un solo lugar.


import { useState, useEffect } from "react";
import {collection, getDocs, query, limit, startAfter, where,} from "firebase/firestore";
import { db } from "../Componentes/firebase/firebase";


export const useFetch = (tipo = null, genero = null) => {

  const [contenido, setContenido] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [paginaActual, setPaginaActual] = useState(1);
  const [ultimosDocs, setUltimosDocs] = useState([]);
  const [haySiguiente, setHaySiguiente] = useState(true);

  const cargarPagina = async (pagina) => {
    try {
      setLoading(true);
      setError("");

      let condiciones = [];

      // Filtrar por tipo
      if (tipo) {
        condiciones.push(where("tipo", "==", tipo));
      }

      // Filtrar por género
      if (genero) {
        condiciones.push(
          where("genero", "array-contains", genero)
        );
      }

      let consultaBase;

      // Si hay filtros
      if (condiciones.length > 0) {
        consultaBase = query(
          collection(db, "contenido"),
          ...condiciones
        );
      } else {
        consultaBase = collection(db, "contenido");
      }

      let consulta;

      // Primera página
      if (pagina === 1) {
        consulta = query(
          consultaBase,
          limit(15)
        );
      } else {
        const ultimoDoc = ultimosDocs[pagina - 2];

        // Seguridad por si no existe el documento anterior
        if (!ultimoDoc) {
          return;
        }

        consulta = query(
          consultaBase,
          startAfter(ultimoDoc),
          limit(15)
        );
      }

      const querySnapshot = await getDocs(consulta);

      const datos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setContenido(datos);

      // Guardar último documento
      if (querySnapshot.docs.length > 0) {
        const ultimoDocumento =
          querySnapshot.docs[querySnapshot.docs.length - 1];

        setUltimosDocs((prev) => {
          const nuevos = [...prev];
          nuevos[pagina - 1] = ultimoDocumento;
          return nuevos;
        });
      }

      setHaySiguiente(querySnapshot.docs.length === 15);
      setPaginaActual(pagina);

    } catch (error) {
      console.error("Error en useFetch:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const siguientePagina = () => {
    if (haySiguiente) {
      cargarPagina(paginaActual + 1);
    }
  };

  const anteriorPagina = () => {
    if (paginaActual > 1) {
      cargarPagina(paginaActual - 1);
    }
  };

  useEffect(() => {
    setPaginaActual(1);
    setUltimosDocs([]);
    setHaySiguiente(true);

    cargarPagina(1);
  }, [tipo, genero]);

  return {
    contenido,
    loading,
    error,
    paginaActual,
    haySiguiente,
    siguientePagina,
    anteriorPagina,
  };
};


