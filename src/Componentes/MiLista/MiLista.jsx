import { useFetch } from "../../hooks/useFetch";
import CardMiLista from '../CardMiLista/CardMiLista';
import { useContext } from "react";
import { MiListaContext } from "../../context/MiListaContext";
import Button from "@mui/material/Button";
import "./MiLista.css";
import Loading from "../../Componentes/Loading/Loading";

const MiLista = () => {
 const { contenido, loading, error } = useFetch();
 const { MiLista, Clear } = useContext(MiListaContext);

    console.log("users:", contenido);
    console.log("loading:", loading);
    console.log("error:", error);

    if (loading) return <Loading />;

    if (error) return <p>{error}</p>;

    return (
        <>
        
        {
            MiLista.length > 0 && (
        
        <>

        <div className="lista">
            <h2>Mi Lista</h2>
            <span>{MiLista.length}</span>
        </div>

        <div className="grid">
            {
            MiLista.map((item) => (
                <CardMiLista
                key={item.nombre}
                data={item}
                />
            ))
            }
        </div>

        <div style={{ display: "flex", backgroundColor: "black", justifyContent: "center" }}>
            <Button
                onClick={Clear}
                variant="contained"
                sx={{
                    pt: 1,
                    mb: 4,
                    pl: 30,
                    pr: 30,
                    ml: 30,
                    mr: 30,
                backgroundColor: "#b65704",
                boxShadow: 3,
                "&:hover": {
                    backgroundColor: "#ff8c08",
                },
                }}
            >
                Vaciar Mi Lista
            </Button>
        </div>
       
          </>
        )
        }
    </>     
    );
};

export default MiLista;

// <Alert severity="success">
//   <AlertTitle>Success</AlertTitle>
//   This is a success Alert with an encouraging title.
// </Alert>