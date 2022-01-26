import { ReactNode } from "react";

export interface IComentarioData{
    id:number
    comentario: string
    user: {
        email: string
    }
}