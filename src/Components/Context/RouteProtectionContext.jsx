import React, { createContext, useState, useEffect } from "react";

export const RouteProtectionContext = createContext();

export const RouterContextProvider = ({ children }) => {
  const [hasVisitedHome, setHasVisitedHome] = useState(false);

  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("hasVisitedHome"));
    if (visited) {
      setHasVisitedHome(true);
    }
  }, []);

  const markAsVisited = () => {
    localStorage.setItem("hasVisitedHome", JSON.stringify(true));
    setHasVisitedHome(true);
  };

  return (
    <RouteProtectionContext.Provider value={{ hasVisitedHome, markAsVisited }}>
      {children}
    </RouteProtectionContext.Provider>
  );
};
