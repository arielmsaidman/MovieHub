import Navbar from "../Componentes/Navbar/Navbar";
import Header from "../Componentes/Header/Header";
import Footer from "../Componentes/Footer/Footer";
import { Outlet } from "react-router-dom";
import MiLista from "../Componentes/MiLista/MiLista";


const LayoutConNavbar = () => {

    return (
        <>
            <Header />
            <Navbar />
            <Outlet />

            <div id="mi-lista">
                <MiLista />
            </div>
            
            <Footer />
        </>
    );
};


export default LayoutConNavbar;