import * as s from "./styles"
import { Header, NavAdm} from "components";
import {Loading} from "components";
import { IComentarioData } from "interface/coment.interface";
import { useEffect, useState } from "react";
import { apiComent } from "services/data";
import Button from "styles/Button";
import { useHistory } from "react-router-dom";
import { FcAddDatabase } from "react-icons/fc";

const AdmComents = () => {
    const [, setComents] = useState<IComentarioData[]>();
    const[isLoading, setIsLoading] = useState(true)
    const history = useHistory()

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
            <Button type ="button" onClick={() => history.push("Adm/coments")}><FcAddDatabase /></Button>
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
                    <Button type="button" bgcolor="edit"> editar</Button>
                </td>
                <td>
                    <Button type="button" bgcolor="remove"> remover</Button>
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