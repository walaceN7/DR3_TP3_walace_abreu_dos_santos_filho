import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Walace",
    avatar_url: "https://github.com/walaceN7.png",
    bio: "Desenvolvedor(a) apaixonado(a) por tecnologia.",
    email: "gbwalace@gmail.com",
    linkedin: "https://www.linkedin.com/in/walace-abreu/",
    github_user: "walaceN7",
    devto_user: "whitep4nth3r",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
