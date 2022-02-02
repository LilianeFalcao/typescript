import { IComentarioData } from "interface/coment.interface";
import api from "services/api";

class ComentarioData {
    index () {
        return api.get<IComentarioData[]>('/comentarios')
    }
    store(data: IComentarioData) {
        return api.post(`/comentarios`, data)
    }
    show(id: number) {
        return api.get<IComentarioData>(`/comentarios/${id}`)
    }
    update(id: number, data: IComentarioData) {
        return api.put(`/comentarios/${id}`, data)
    }
    destroy(id: number) {
        return api.delete(`/comentarios/${id}`)
    }
}

export default new ComentarioData()