import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const logID = localStorage.getItem("isLoggedIn");
    if (logID === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  function loginHandler(email, password) {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  }
  function logoutHandler() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
