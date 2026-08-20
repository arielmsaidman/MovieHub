import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { SearchProvider } from "./context/SearchContext";
import {UsuarioProvider} from "./context/UsuarioContext";
//import "./CargarFirebase"; //solo lo use para cargar la base del Firebase

createRoot(document.getElementById("root")).render(
<UsuarioProvider>
  <SearchProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </SearchProvider>
</UsuarioProvider>
);