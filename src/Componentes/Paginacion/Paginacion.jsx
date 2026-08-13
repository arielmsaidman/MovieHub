import "./Paginacion.css";

const Paginacion = ({paginaActual, haySiguiente, siguientePagina, anteriorPagina,}) => {

  return (
    <div className="paginacion" role="group">

      <button
        type="button"
        className="btn btn-primary"
        onClick={anteriorPagina}
        disabled={paginaActual === 1}
      >
        ← Anterior
      </button>

      <button
        type="button"
        className="btn-numero"
        disabled
      >
        Página {paginaActual}
      </button>

      <button
        type="button"
        className="btn btn-primary"
        onClick={siguientePagina}
        disabled={!haySiguiente}
      >
        Siguiente →
      </button>

    </div>
  );
};

export default Paginacion;