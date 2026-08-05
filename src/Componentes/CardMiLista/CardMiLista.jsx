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
          maxWidth: 245,
          mt:1,
          pb:0.1,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
            cursor: "pointer",
          },
      }}>

      <CardMedia
        sx={{ height: 250 }}
        image={data.avatar_url}
        title={data.login}
      />

      <CardContent sx={{ height: 120 }}>

        <Typography gutterBottom variant="h5">
        {data.login}
        </Typography>

        <Typography variant="body2">
          ID: {data.id}
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