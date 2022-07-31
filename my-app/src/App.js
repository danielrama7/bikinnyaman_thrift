import "./App.css";
import Router from "./router";
import { UserContext } from "./context/context";
import { useLocalStorage } from "./hooks/useLocalStorage";
import React, { useMemo } from "react";

function App() {
  const [user, setUser] = useLocalStorage("user");
  const userProvider = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return (
    <div className="App">
      <UserContext.Provider value={userProvider}>
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
