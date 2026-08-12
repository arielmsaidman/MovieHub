// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./Componentes/firebase/firebase";

// const probarFirebase = async () => {
//   try {
//     console.log("🔥 Iniciando prueba Firebase");

//     const docRef = await addDoc(collection(db, "contenido"), {
//       nombre: "Interstellar",
//       tipo: "pelicula",
//       anio: 2014
//     });

//     console.log("✅ DOCUMENTO CREADO:", docRef.id);

//   } catch (error) {
//     console.error("❌ ERROR FIREBASE:", error);
//   }
// };

// probarFirebase();

import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./Componentes/firebase/firebase";
import contenido from "./data/contenido";

const cargarFirebase = async () => {
  try {
    const coleccion = collection(db, "contenido");

    for (const item of contenido) {
      const documento = doc(coleccion); // ID automático

      await setDoc(documento, item);

      console.log(`✅ ${item.nombre} → ${documento.id}`);
    }

    console.log("🎬 Base cargada correctamente");
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

cargarFirebase();