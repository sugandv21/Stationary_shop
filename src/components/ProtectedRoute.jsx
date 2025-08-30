import React, { useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, openLogin } = useAuth();
  const opened = useRef(false); // to track if modal was opened already

  useEffect(() => {
    if (!user && !opened.current) {
      openLogin(); 
      opened.current = true; // mark as opened
    }
  }, [user, openLogin]);

  if (!user) return null;

  return children;
}
