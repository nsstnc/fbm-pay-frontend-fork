import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ email, setEmail, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};