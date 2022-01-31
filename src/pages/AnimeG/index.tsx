import {Ganime, AnimeM} from "components";
import { IUploadData } from "interface/upload.interface";
import { useState, useEffect } from "react";
import { apiUpload } from "services/data";
import {Loading} from "components";

const Upload = () => {
const [, setUploads] = useState<IUploadData[]>();
const[isLoading, setIsLoading] = useState(true)

useEffect(() => {
    async function fetchData() {
        const response = await apiUpload.index();
        setUploads(response.data);
        setIsLoading(false)
    }
    fetchData();
}, []);

return (
    <>
    {
       isLoading ? (<Loading />) :(
       <>
        <Ganime />
        <AnimeM />
        </>
   )}
   
    </>
    );
   };

export default Upload;