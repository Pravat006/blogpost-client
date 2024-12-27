import  { useState, useEffect } from "react";

export const useSession = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    const sessionToken = localStorage.getItem("sessionToken");
    if (sessionToken) {
      setSession(sessionToken);
    }
  });
  const createSession = (token) => {
    localStorage.setItem("sessionToken", token);
    setSession(token);
  };

  const destroySession = () => {
    localStorage.removeItem("sessionToken");
    setSession(null);
  };
  return {
    session,
    createSession,
    destroySession,
  };
};
