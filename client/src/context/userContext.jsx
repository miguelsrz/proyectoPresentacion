import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // const storedUserId = localStorage.getItem("usuarioID");
    // if (storedUserId) {
    //   fetch(`http://localhost:3000/api/usuario?usuario_id=${storedUserId}`)
    //     .then((res) => res.json())
    //     .then((data) => setUsuario(data))
    //     .catch(() => localStorage.removeItem("usuarioID"));
    // }
  }, []);
  const getUser = () => {
    const receivedUser = localStorage.getItem("usuarioID");
    setUsuario(receivedUser);
    console.log("USUARIO CARGADO");
  };
  const login = (usuarioId) => {
    localStorage.setItem("usuarioID", usuarioId);
    setUsuario(usuarioId);
    console.log(localStorage.getItem("usuarioID"));
  };

  const logout = () => {
    localStorage.removeItem("usuarioID");
    setUsuario(null);
  };

  return (
    <UserContext.Provider value={{ usuario, getUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
