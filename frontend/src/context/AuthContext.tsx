import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

type user = {
  _id: number;
  fullName: string;
  username: string;
  gender: "male" | "female";
  profilePic: string;
} | null;

type authUserState = {
  authUser: user;
  setAuthUser: Dispatch<SetStateAction<user>>;
};

export const AuthContext = createContext<authUserState | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: { children: JSX.Element }): null | object => {
  const [authUser, setAuthUser] = useState<user>(() => {
    const chatUserFromLocalStorage = localStorage.getItem("chat-user");
    if (chatUserFromLocalStorage) return JSON.parse(chatUserFromLocalStorage);
    return null;
  });

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
