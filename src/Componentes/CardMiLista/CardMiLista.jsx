import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { MiListaContext } from "../../context/MiListaContext";

const CardMiLista = ({ data }) => {

const { removeItem } = useContext(MiListaContext);


  return (
    <MuiCard 
      sx={{backgroundColor: "#979595",
          maxWidth: 345,
          mt:1,
          pb:0.1,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
            cursor: "pointer",
          },
      }}>

      <CardMedia
        sx={{ height: 350 }}
        image={data.imagen}
        
      />

      <CardContent sx={{ height: 130 }}>

        <Typography variant="body2">
        {data.nombre}
        </Typography>

         <Typography variant="body2">
          {data.tipo === "pelicula"
            ? `duracion: ${data.duracion} min`
            : `duracion: ${data.capitulos}cap (${data.temporadas} temp)`}
        </Typography>

        <Typography variant="body2">
        {data.anio}
        </Typography>

        <Typography variant="body2">
          {data.genero.join(" | ")}
        </Typography>

         <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => removeItem(data.id)}
            sx={{
                pt: 0.5,
                mt: 1,
                pl: 1,
                pr: 1,
                ml: 0,
            
                color: "white",
                backgroundColor: "#b65704",
                borderRadius: 1,
                boxShadow: 3,
                display: { xs: "none", sm: "block" },
                
                "&:hover": {
                    backgroundColor: "#ff8c08",
                    cursor: "pointer",
                },
                }
            }
            >
            Eliminar de Mi lista
            {/* Documentales, tendencias */}
          </Typography>

      </CardContent>

    </MuiCard>
  );
}

export default CardMiLista;