import { IComentarioData } from "interface/coment.interface";
import api from "services/api";

class ComentarioData {
    index () {
        return api.get<IComentarioData[]>('/comentarios')
    }
}

export default new ComentarioData()