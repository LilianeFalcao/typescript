import * as s from "./styles"
import {Loading} from "components";
import {} from "react-icons"
import {useForm} from "react-hook-form"
import { useEffect, useState } from "react";
import Button from "styles/Button";

const Register = () => {
    const[isLoading, setIsLoading] = useState(true)

    const{register, handleSubmit } = useForm()

    useEffect(() => {
        setIsLoading(false)
    }, []);

 return (
 <>
 {
    isLoading ? (<Loading />) :(<>
 <s.Main>
        <div className="loginb">
            <h1>cadastre-se aqui </h1> 
            <form method="POST">
                <div>
                <p>Usuario</p>
                <input type="email" 
                placeholder="email de usuario" 
                required {...register("email")}>
                </input>
                </div>
                <div>
                <p>Senha</p>
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