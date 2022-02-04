import { Header, NavAdm} from "components";
import * as s from "./styles";
import {Loading} from "components";
import { Link, useHistory, useParams} from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import Button from "styles/Button";
import { apiComent } from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

const ComentsStore = () => {
    const[isLoading, setIsLoading] = useState(true)
    
    const {handleSubmit, register} = useForm()

    const history = useHistory()

    const { id } = useParams<{ id: string }>();

    const handleStore = useCallback(
        async (data) => {
          try {
            setIsLoading(true);
            if (Number(id) > 0) {
              await apiComent.update(Number(id), data);
              toast.warning("comentario atualizado!");
            } else {
              await apiComent.store(data);
              toast.success("Comentario feito!");
            }
            history.push("/Adm");
          } catch (error) {
            console.log(error);
            const err = error as AxiosError;
            const msg = err.response?.data.errors.map((i: any) => i.message);
            toast.error(`Falha ao comentar! ${msg.join(" ")}`);
          } finally {
            setIsLoading(false);
          }
        },
        [history, id]
      );

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
                        <Link to="/Adm"> Voltar </Link>                    
                        <div>
                            <label htmlFor="coment"> Comentario: </label>
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