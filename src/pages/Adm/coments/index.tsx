import * as s from "./styles"
import { Header, NavAdm} from "components";
import {Loading} from "components";
import { IComentarioData } from "interface/coment.interface";
import { useEffect, useState } from "react";
import { apiComent } from "services/data";
import Button from "styles/Button";

const AdmComents = () => {
    const [, setComents] = useState<IComentarioData[]>();
    const[isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData() {
            const response = await apiComent.index();
            setComents(response.data);
            setIsLoading(false)
        }
        fetchData();
    }, []);
 return (
 <>
 {
    isLoading ? (<Loading />) :(<>
 <Header />
 <NavAdm />
 <s.Main>
        <div>
            <Button type ="button">
                add
            </Button>
        </div>
        <table>
            <thead>
                <tr> 
                    <th> email</th>
                    <th> comentario</th>
                    <th> editar</th>
                    <th> remover</th>
                </tr>
            </thead>
            <tbody>
                <td>
                    <Button type="button"> editar</Button>
                </td>
                <td>
                    <Button type="button"> remover</Button>
                </td>
            </tbody>
        </table>
 </s.Main>
    </>
)}

 </>
 );
};
export default AdmComents;