import { useContext } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from "react-router-dom";
import { MiListaContext } from '../../context/MiListaContext';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#979595",
  "&:hover": {
    backgroundColor: "#BDBDBD",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {

const navigate = useNavigate();
const { MiLista } = useContext(MiListaContext);

const { search, setSearch } = useContext(SearchContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "#383636", // color de fondo
              color: "white",             // color del texto
            }}
          >
          
            <div className='titulo'>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Home
                </Link>
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link
                  to="/peliculas"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Películas
                </Link>
              </Typography>
              

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link
                  to="/series"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Series
                </Link>                
              </Typography>

            </div>

            <div className='buscar-y-lista'>

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>

                <StyledInputBase
                    placeholder="Buscar..."
                    value={search}
                    onChange={(el)=>{
                      const valor = el.target.value;
                      setSearch(valor);

                      if(valor.trim() !== ""){
                          navigate("/buscar");
                      } else {
                        navigate("/home");
                      }
                    }}
                    inputProps={{ "aria-label": "search" }}
                />

              </Search>

              <Typography
                  variant="h6"
                  onClick={() => {
                  
                    if(MiLista.length === 0){
                      alert("Lista vacía");
                      return;
                    }
                      const elemento = document.getElementById("mi-lista");

                      if(elemento){
                          elemento.scrollIntoView({
                              behavior: "smooth"
                          });
                      }
                  }}
                  sx={{
                      pt:0.5,
                      pl:4,
                      pr:4,
                      ml:2,
                      backgroundColor:"#EC1C1A",
                      borderRadius:1,
                      color:"white",
                      "&:hover":{
                          backgroundColor:"#b91413",
                          cursor:"pointer",
                      }
                  }}
              >
                Mi lista
              </Typography>

            </div>

          </Toolbar>
        </AppBar>
      </Box>

      {/* <h1>Home</h1> */}
    </>
  );
};

export default Navbar;