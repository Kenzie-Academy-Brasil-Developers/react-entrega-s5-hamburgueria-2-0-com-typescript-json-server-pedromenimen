import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/index";

interface UserProviderProps {
  children: ReactNode;
}

export interface UserData {
  email?: string;
  password: string;
  name: string;
  confirmPassword?: string;
}

interface UserProviderData {
  token: string;
  login: (userData: UserData) => void;
  signUp: (userDate: UserData) => void;
  logOut: () => void;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const history = useHistory();

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  // const [decoded, setDecoded] = useState<DecodedData>({} as DecodedData);

  const login = (userData: UserData) => {
    api
      .post("/login", userData)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        setToken(res.data.accessToken);

        history.push("/dashboard");
      })
      .catch(() => toast.info("Usuário inexistente ou senha incorreta"));
  };
  const signUp = (userData: UserData) => {
    api
      .post("/register", userData)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch(() => toast.error("Email já existente"));
  };

  const logOut = () => {
    localStorage.clear();
    setToken("");
    history.push("/");
  };
  return (
    <UserContext.Provider value={{ token, login, signUp, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
