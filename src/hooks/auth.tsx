import { IAuthContextData, IResponseUser, IUser } from "interface/user.interface";
import { createContext, useState, useCallback, useContext, useEffect} from "react";
import api from "services/api";
import { apiUser } from "services/data";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<IResponseUser>({} as IResponseUser);

  const singIn = useCallback(
    async ({ email, password }: IUser)=> {
        const response = await apiUser.login({ email, password })
        const { token, user } = response.data;
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setAuth({ token, user })

        localStorage.setItem("@Pdmonn: token", token)
        localStorage.setItem("@Pdmonn: user", JSON.stringify(user))
    },[],
  ) 

    const RemoveLocalStorage = useCallback (
    async  () =>{
        localStorage.removeItem("@Pdmonn: token")
        localStorage.removeItem("@Pdmonn: user")
    },
    [],
  )

  const singOut = useCallback(
    async() =>{
        setAuth({} as IResponseUser)
        await RemoveLocalStorage()
        delete api.defaults.headers.common.Authorization;
    },
    [RemoveLocalStorage],
  )



const loadUserStorageData = useCallback (
    async () =>{
        const token = localStorage.getItem("@Pdmonn: token")
        const user = localStorage.getItem("@Pdmonn: user")
        if (token && user){
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            setAuth({ token, user: JSON.parse (user) })
        }
    },
    [],
 )

 useEffect(() => {
    loadUserStorageData()
},[loadUserStorageData]
);

  return (
    <AuthContext.Provider
      value={{
        singIn,
        singOut,
        loadUserStorageData,
        token: auth.token,
        user: auth.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): IAuthContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error("useAuth deve ser utilizado juntamente ao AuthProvider");
    }

    return context;
    }
export { AuthProvider, useAuth };