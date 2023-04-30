import React, { useContext, useState } from "react";
import { User } from "screen/project-list";
import * as auth from "auth-provider";
import { useMount } from "uitls";

interface authForm {
  username: string;
  password: string;
}
interface authpProps {
  user: User | null;
  login: (user: authForm) => Promise<void>;
  register: (user: authForm) => Promise<void>;
  logout: () => Promise<void>;
}
const AuthContext = React.createContext<authpProps | undefined>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: authForm) => auth.Login(user).then(setUser);

  const register = (user: authForm) => auth.Register(user).then(setUser);

  const logout = () => auth.LogOut().then(() => setUser(null));

  useMount(() => {
    // 函数式消参
    auth.bootStapUser().then(setUser);
  });

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("请不要在authProvider外使用context");
  }
  return context;
};
