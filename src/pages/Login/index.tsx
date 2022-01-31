import * as s from "./styles"
import {Loading} from "components";
import {} from "react-icons"
import {useForm} from "react-hook-form"
import { useCallback, useEffect, useState } from "react";
import Button from "styles/Button";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useAuth } from "hooks/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
    const[isLoading, setIsLoading] = useState(true)
    const{register, handleSubmit } = useForm()
    const{singIn} = useAuth()
    const history = useHistory();


    useEffect(() => {
        setIsLoading(false)
    }, []);

    const handleLogin  = useCallback(async (data) => {
        try {
            setIsLoading(true)
            await singIn(data)
            toast.success("Login feito com sucesso")
            history.push("/")
        } catch (error) {
            console.log(data)
            const erro = error as AxiosError 
            const msg = erro.response?.data;
            toast.error(`falha no login! ${msg}`)
           }finally{
            setIsLoading(false)
           }
    }, [singIn, history]);

 return (
 <>
 {
    isLoading ? (<Loading />) :(<>
 <s.Main>
        <div className="loginb">
            <form method="POST" onSubmit={handleSubmit(handleLogin)}>
            <p>Login</p> 
            <p>Usuario</p>
                <div>
                <input type="email" 
                placeholder="email de usuario" 
                required {...register("email")}>
                </input>
                </div>
            <p>Senha</p>
                <div>
                <input type="password" 
                placeholder="senha" 
                required {...register("password")}>
                </input>
                </div>
                <Button type = "submit">
                    Login
                </Button>
            </form>  
        </div>
 </s.Main>
    </>
)}

 </>
 );
};
export default Login;