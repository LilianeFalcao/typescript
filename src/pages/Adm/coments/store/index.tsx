import { Header, NavAdm} from "components";
import * as s from "./styles";
import {Loading} from "components";
import { Link } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import Button from "styles/Button";
import { useForm } from "react-hook-form";

const ComentsStore = () => {
    const[isLoading, setIsLoading] = useState(true)
    
    const {handleSubmit, register} = useForm()

    const handleStore = useCallback((data) => {
        console.log(data)
    }, []);

    useEffect(() => {
            setIsLoading(false)
    }, []);

 return (
 <>
 {
    isLoading ? (<Loading />) :(<>
    <Header />
    <NavAdm />
    <s.Main>
        <form method="POST" onSubmit={handleSubmit(handleStore)}>
                        <Link to="/Adm">
                             Voltar 
                        </Link>                    
                        <div>
                            <label htmlFor="coment"> Comentario </label>
                        <textarea id="coment" 
                        placeholder="deixe seu comentario" 
                        required {...register("comentario")}
                        />
                        </div>
                        <Button type = "submit">
                            enviar
                        </Button>
                    </form>  
    </s.Main>
    </>
)}

 </>
 );
};
export default ComentsStore;