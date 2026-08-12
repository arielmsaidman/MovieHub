import { useFetch } from "../../hooks/useFetch";
import CardMiLista from '../CardMiLista/CardMiLista';
import { useContext } from "react";
import { MiListaContext } from "../../context/MiListaContext";
import Button from "@mui/material/Button";

const MiLista = () => {
 const { contenido, loading, error } = useFetch();
 const { MiLista, Clear } = useContext(MiListaContext);

    console.log("users:", contenido);
    console.log("loading:", loading);
    console.log("error:", error);

    if (loading) return <p>loading</p>;

    if (error) return <p>{error}</p>;

    return (
        <>
        {
            MiLista.length > 0 && (
        
        <>
      
        <h2>Mi Lista ({MiLista.length})</h2>

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
        
        <Button
            onClick={Clear}
            variant="contained"
            sx={{
               pt: 0.5,
                mt: 1,
                pl: 1,
                pr: 0,
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
          </>

            )

        }

    </>     
    );
};

export default MiLista;