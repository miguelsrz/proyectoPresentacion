import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // const storedUserId = localStorage.getItem("token");
    // if (storedUserId) {
    //   fetch(`http://localhost:3000/api/usuario?usuario_id=${storedUserId}`)
    //     .then((res) => res.json())
    //     .then((data) => setUsuario(data))
    //     .catch(() => localStorage.removeItem("token"));
    // }
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getUser = () => {
    const receivedUser = localStorage.getItem("token");
    setUsuario(receivedUser);
  };
  const login = (token) => {
    localStorage.setItem("token", token);
    setUsuario(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUsuario(null);
  };

  return (
    <UserContext.Provider
      value={{ usuario, getUser, login, logout, capitalizeFirstLetter }}
    >
      {children}
    </UserContext.Provider>
  );
};
