import { Header, Nav, Main} from "components";
import {Loading} from "components";
import { IComentarioData } from "interface/coment.interface";
import { useEffect, useState } from "react";
import { apiComent } from "services/data";

const Home = () => {
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
    <Nav />
    <Main />
    </>

)}

 </>
 );
};
export default Home;