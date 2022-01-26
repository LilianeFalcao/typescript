import { IUploadData } from "interface/upload.interface";
import api from "services/api";

class UploadData {
    index () {
        return api.get<IUploadData[]>('/uploads')
    }
}

export default new UploadData()