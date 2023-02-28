import { createContext, useContext } from "react";

const AppContext = createContext();

export function UserContext({ children }) {
  const users = [
    {
      name: "Kat",
      email: "kat@gmail.com",
      password: "secret",
      loggedIn: false,
    },
  ];

  return <AppContext.Provider value={users}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
