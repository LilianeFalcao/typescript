import * as s from "./styles"
import {Loading} from "components";
import { useEffect, useState } from "react";

const Register = () => {
    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, []);

 return (
 <>
 {
    isLoading ? (<Loading />) :(<>
 <s.Main>
        <div className="loginb">
            <h1> Faça login aqui </h1> 
            <form method="POST">
                 
            </form>  
        </div>
 </s.Main>
    </>
)}

 </>
 );
};
export default Register;