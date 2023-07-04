import React, { createContext, useState } from "react";
import api from "../api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const token = await api.post("/auth/login", { email, password });
      const user = await api.get("/auth/profile", {
        headers: { Authorization: `Bearer ${token.data.access_token}` },
      });
      setUser(user.data);

      localStorage.setItem("token", token.data.access_token);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token.data.access_token}`;
    } catch (error) {
      console.error("Login has failed:", error);
      return error.response;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
