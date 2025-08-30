import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loginModalOpen, setLoginModalOpen] = useState(false); // renamed

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setLoginModalOpen(false); // close modal on successful login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const openLogin = () => setLoginModalOpen(true); // used after signup
  const closeLogin = () => setLoginModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loginModalOpen, // use this in Navbar to display modal
        openLogin,
        closeLogin,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
