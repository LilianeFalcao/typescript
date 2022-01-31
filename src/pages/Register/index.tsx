import * as s from "./styles"
import {Loading} from "components";
import {} from "react-icons"
import {useForm} from "react-hook-form"
import { useCallback, useEffect, useState } from "react";
import Button from "styles/Button";
import { apiUser } from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const Register = () => {
    const[isLoading, setIsLoading] = useState(true)

    const{register, handleSubmit } = useForm()

    useEffect(() => {
        setIsLoading(false)
    }, []);

    const handleRegister  = useCallback(async (data) => {
        try {
            setIsLoading(true)
            await apiUser.register(data)
            toast.success("Bem-vindo, cadastro feito com sucesso")
        } catch (error) {
            const erro = error as AxiosError 
            const msg = erro.response?.data.errors.map((i:any) => i.message);
            toast.error(`falha no cadastro! ${msg.join("")}`)
           }finally{
            setIsLoading(false)
           }
    }, []);

 return (
 <>
 {
    isLoading ? (<Loading />) :(<>
 <s.Main>
        <div className="loginb">
            <form method="POST" onSubmit={handleSubmit(handleRegister)}>
            <p>Cadastre-se aqui </p> 
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
                    cadastro
                </Button>
            </form>  
        </div>
 </s.Main>
    </>
)}

 </>
 );
};
export default Register;