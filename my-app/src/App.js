import "./App.css";
import Router from "./router";
import { UserContext } from "./context/context";
import { AdminContext } from "./context/context";
import { useLocalStorage } from "./hooks/useLocalStorage";
import React, { useMemo } from "react";

function App() {
  const [user, setUser] = useLocalStorage("user");
  const [admin, setAdmin] = useLocalStorage("admin");
  const userProvider = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  const adminProvider = useMemo(
    () => ({
      admin,
      setAdmin,
    }),
    [admin, setAdmin]
  );

  return (
    <div className="App">
      <AdminContext.Provider value={adminProvider}>
        <UserContext.Provider value={userProvider}>
          <Router />
        </UserContext.Provider>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
