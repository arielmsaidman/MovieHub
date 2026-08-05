import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { MiListaContext } from "../../context/MiListaContext";


const Card = ({ data }) => {

 const { AddItem } = useContext(MiListaContext);

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
            onClick={() => AddItem(data)}
            component="div"
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
            Agregar a Mi lista
                {/* Documentales, tendencias */}
          </Typography>

      </CardContent>

    </MuiCard>
  );
}

export default Card;

// import MuiCard from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// const Card = ({ data }) => {
//   return (
//     <MuiCard
//       sx={{
//         backgroundColor: "#202020",
//         color: "white",
//         maxWidth: 245,
//         mt: 1,
//         borderRadius: 2,
//         transition: "transform .3s ease, box-shadow .3s ease",
//         "&:hover": {
//           transform: "scale(1.05)",
//           boxShadow: 8,
//           cursor: "pointer",
//         },
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="330"
//         image={data.poster}
//         alt={data.title}
//       />

//       <CardContent>
//         <Typography variant="h6" noWrap>
//           {data.title}
//         </Typography>

//         <Typography variant="body2" color="gray">
//           {data.year} • {data.genre}
//         </Typography>

//         <Typography
//           variant="body2"
//           sx={{ color: "#FFD700", mt: 1 }}
//         >
//           ⭐ {data.rating}
//         </Typography>

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             mt: 2,
//             backgroundColor: "#E50914",
//             "&:hover": {
//               backgroundColor: "#B20710",
//             },
//           }}
//         >
//           + Mi Lista
//         </Button>
//       </CardContent>
//     </MuiCard>
//   );
// };

// export default Card;