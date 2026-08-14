import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { MiListaContext } from "../../context/MiListaContext";
import Rating from "@mui/material/Rating";

const CardMiLista = ({ data }) => {

const { removeItem } = useContext(MiListaContext);


  return (
    <MuiCard 
      sx={{backgroundColor: "#4b4b4b",
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
        sx={{ height: 380 }}
        image={data.imagen}
        
      />

      <CardContent sx={{ borderTop: "3px solid orange", height: 170 }}>

        <Typography 
         sx={{
          color: "antiquewhite",
          fontSize: "25px",
          fontWeight: "bold",
          fontFamily: "Century Gothic",
          mt: "-10px",
        }}
          >
          {data.nombre}
        </Typography>

        <Typography>          
            <Rating name="half-rating-read" defaultValue={(data.reputacion)/2} precision={0.25} readOnly />
        </Typography>

        <Typography sx={{color: "antiquewhite",}} variant="body2">
          {data.tipo === "pelicula"
            ? `Pelicula | ${data.duracion} min`
            : `Serie | ${data.capitulos} capitulos (${data.temporadas} temporadas)`}
        </Typography>

        <Typography 
          sx={{
            color: "antiquewhite",
            fontSize: "15px"}}
          variant="body2">
          {data.anio}
        </Typography>

        <Typography sx={{color: "antiquewhite",}} ariant="body2">
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
            
          </Typography>

      </CardContent>

    </MuiCard>
  );
}

export default CardMiLista;