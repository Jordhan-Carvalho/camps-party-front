import React, { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const userContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  const logout = async () => {
    try {
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
