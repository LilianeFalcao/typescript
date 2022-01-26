import { ReactNode } from "react";

export interface IUser {
    email: string
    password: string
}

export interface IResponseUser {
    user: {
        id: number
        email:string
    }
    token: string
}

export interface IAuthContextData{
    singIn(credentials: IUser): Promise<void>
    singOut(): Promise<void>
    loadUserStorageData(): Promise<void>
    token: string
    user: {
        id: number
        email: string
    }
}