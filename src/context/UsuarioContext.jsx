import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

  const [nombre, setNombre] = useState("");

  return (
    <UsuarioContext.Provider value={{ nombre, setNombre }}>
      {children}
    </UsuarioContext.Provider>
  );
};