import * as s from "./styles"
import {Loading} from "components";
import {} from "react-icons"
import {useForm} from "react-hook-form"
import { useCallback, useEffect, useState } from "react";
import Button from "styles/Button";

const Register = () => {
    const[isLoading, setIsLoading] = useState(true)

    const{register, handleSubmit } = useForm()

    useEffect(() => {
        setIsLoading(false)
    }, []);

    const handleRegister  = useCallback(async (data) => {
        try {
            console.log(data)
        } catch (error) {
            console.log(error);
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
                required {...register("senha")}>
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