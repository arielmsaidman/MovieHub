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
import { SearchProvider } from "./context/SearchContext";
import BuscarContenido from "./pages/BuscarContenido/BuscarContenido";
import LayoutConNavbar from "./Layout/LayoutConNavbar";
import LayoutPublico from "./Layout/LayoutPublico";

function App() {

  return (
    <MiListaProvider>
      <SearchProvider>

        <Routes>
          {/* Rutas con Navbar */}
          <Route element={<LayoutConNavbar />}>           
            <Route path="/home" element={<Home />}/>
            <Route path="/buscar" element={<BuscarContenido />}/>
            <Route path="/peliculas" element={<Peliculas />}/>
            <Route path="/series" element={<Series />}/>
          </Route>

          {/* Rutas sin Navbar */}
          <Route element={<LayoutPublico />}>
            <Route path="/" element={<NoLogin />}/>
            <Route path="/registrarse" element={<Login />}/>
            <Route path="*" element={<Error404 />}/>
          </Route>

        </Routes>

      </SearchProvider>
    </MiListaProvider>
  );
}


export default App;
