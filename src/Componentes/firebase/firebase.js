// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ9S65FnBlcM6fWQ7OsJvXq0-ikwEzuzY",
  authDomain: "moviehub-a62dd.firebaseapp.com",
  projectId: "moviehub-a62dd",
  storageBucket: "moviehub-a62dd.firebasestorage.app",
  messagingSenderId: "794730957141",
  appId: "1:794730957141:web:ce37d931276f96de7ec7dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar la instancia de Firestore para usar en componentes
export { db };
