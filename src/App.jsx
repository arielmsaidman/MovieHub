import "./App.css";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer"
import NoLogin from "./Pages/NoLogin/NoLogin";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Navbar from "./Componentes/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Error404 from "./Pages/Error404/Error404";
import Peliculas from "./Pages/Peliculas/Peliculas";
import Series from "./Pages/Series/Series";
import MiLista from "./Componentes/MiLista/MiLista";
import { MiListaProvider } from "./context/MiListaContext";


function App() {
  return (
    <>
    <MiListaProvider>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<NoLogin />} />
        <Route path="/registrarse" element={<Login />} />        
        <Route path="/home" element={<Home />} /> 
        <Route path="/peliculas" element={<Peliculas />} /> 
        <Route path="/series" element={<Series />} /> 
        <Route path="*" element={<Error404 />} />
      </Routes>
      
      <MiLista />
      <Footer />
    </MiListaProvider>  
      
    </>
  );
}

export default App;
