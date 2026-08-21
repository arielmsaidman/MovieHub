import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Componentes/firebase/firebase";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import Loading from "../../Componentes/Loading/Loading";

import "./PresentacionCard.css";


const PresentacionCard = () => {

  const { id } = useParams();

  const [contenido, setContenido] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const obtenerContenido = async () => {

      try {

        const referencia = doc(db, "contenido", id);

        const documento = await getDoc(referencia);

        if (documento.exists()) {

          setContenido({
            id: documento.id,
            ...documento.data()
          });

        } else {

          console.log("No existe ese contenido");

        }

      } catch (error) {

        console.error("Error obteniendo contenido:", error);

      } finally {

        setLoading(false);

      }

    };

    obtenerContenido();

  }, [id]);


  if (loading) {
    return <Loading />;
  }


  if (!contenido) {
    return <p>Contenido no encontrado</p>;
  }


  return (

    <div className="fondoCard">

      <Card
        sx={{
          backgroundColor: "#4b4b4b",
          maxWidth: 1000,
          margin: "30px auto",
        }}
      >

        <div className="presentacion">

          <CardMedia
            component="img"
            image={contenido.imagen}
            alt={contenido.nombre}
            className="imagen-presentacion"
            sx={{  borderRight: "3px solid orange"}}
          />


          <CardContent className="contenido-presentacion">

            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "bold",
                fontFamily: "Century Gothic",
                color: "antiquewhite",
              }}
            >
              {contenido.nombre}
            </Typography>


            <Rating
              value={contenido.reputacion / 2}
              precision={0.25}
              readOnly
            />


            <Typography
              sx={{
                color: "antiquewhite",
                marginTop: "10px",
              }}
            >
              {contenido.tipo === "pelicula"
                ? `Película | ${contenido.duracion} min`
                : `Serie | ${contenido.capitulos} capítulos (${contenido.temporadas} temporadas)`}
            </Typography>


            <Typography
              sx={{
                color: "antiquewhite",
                marginTop: "5px",
              }}
            >
              {contenido.anio}
            </Typography>


            <Typography
              sx={{
                color: "antiquewhite",
                marginTop: "5px",
              }}
            >
              {contenido.genero?.join(" | ")}
            </Typography>


            <Typography
              sx={{
                color: "antiquewhite",
                marginTop: "20px",
                lineHeight: 1.6,
              }}
            >
              {contenido.sinopsis}
            </Typography>


            <Typography
              sx={{
                color: "antiquewhite",
                marginTop: "15px",
              }}
            >
              <strong>Director:</strong> {contenido.director}
            </Typography>


            <Button
              variant="contained"
              sx={{
                marginTop: "25px",
                backgroundColor: "#b65704",
                "&:hover": {
                  backgroundColor: "#ff8c08",
                },
              }}
              onClick={() => window.open(contenido.trailer, "_blank")}
            >
              Ver tráiler
            </Button>

          </CardContent>

        </div>

      </Card>

    </div>
  );
};


export default PresentacionCard;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {doc, getDoc} from "firebase/firestore";
// import { db } from "../../Componentes/firebase/firebase";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
// import Loading from "../../Componentes/Loading/Loading";
// import Rating from "@mui/material/Rating";
// import "./PresentacionCard.css";
// import MuiCard from '@mui/material/Card';


// const PresentacionCard = () => {

//   const { id } = useParams();

//   const [contenido, setContenido] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     const obtenerContenido = async () => {

//       try {

//         const referencia = doc(db, "contenido", id);

//         const documento = await getDoc(referencia);

//         if (documento.exists()) {

//           setContenido({
//             id: documento.id,
//             ...documento.data()
//           });

//         } else {

//           console.log("No existe ese contenido");

//         }

//       } catch (error) {

//         console.error("Error obteniendo contenido:", error);

//       } finally {

//         setLoading(false);

//       }
//     };

//     obtenerContenido();

//   }, [id]);


//   if (loading) {
//     return <Loading />;
//   }


//   if (!contenido) {
//     return <p>Contenido no encontrado</p>;
//   }


//   return (
//     <Card sx={{ maxWidth: 345 }}>

//         <div className="fondo">
            
//             <CardActionArea
//                 onClick={() => window.open(contenido.trailer, "_blank")}
//             >
            
//             <MuiCard 
//                    sx={{backgroundColor: "#4b4b4b",
//                       maxWidth: 345,
//                       mt:1,
//                       pb:0.1,
//                       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                       "&:hover": {
//                         transform: "scale(1.02)",
//                         cursor: "pointer",
//                       },
//                   }}
//             >

//                 <CardMedia
//                 //component="img"
//                 sx={{
//                 height: 380,
//                 cursor: "pointer",
//                 }}
//                 image={contenido.imagen}
//                 />


//                 <CardContent sx={{  borderTop: "3px solid orange", height: 250  }}>

//                 <Typography
//                     sx={{
//                         fontSize: "25px",
//                         fontWeight: "bold",
//                         fontFamily: "Century Gothic",
//                         color: "antiquewhite",
//                         mt: "-10px",
//                     }}
//                 >
//                     {contenido.nombre}
//                 </Typography>

                
//                 <Typography>          
//                     <Rating name="half-rating-read" defaultValue={(contenido.reputacion)/2} precision={0.25} readOnly />
//                 </Typography>

//                 <Typography sx={{color: "antiquewhite",}} variant="body2">
//                     {contenido.tipo === "pelicula"
//                         ? `Pelicula | ${contenido.duracion} min`
//                         : `Serie | ${contenido.capitulos} capitulos (${contenido.temporadas} temporadas)`}
//                 </Typography>

//                 <Typography
//                      sx={{color: "antiquewhite",fontSize: "15px"}}
//                      variant="body2"
//                 >
//                     {contenido.anio}
//                 </Typography>

//                 <Typography sx={{color: "antiquewhite",}} variant="body2">
//                 {contenido.genero?.join(" | ")}
//                 </Typography>

//                 <Typography
//                     variant="body2"
//                     sx={{ color: "text.secondary" }}
//                 >
//                     {contenido.sinopsis}
//                 </Typography>

//                 <Typography
//                     variant="body2"
//                     sx={{ color: "text.secondary" }}
//                 >
//                     Director: {contenido.director}
//                 </Typography>

//                 </CardContent>

//                 </MuiCard>

//             </CardActionArea>
        
//         </div>

//     </Card>
//   );
// };

// export default PresentacionCard;