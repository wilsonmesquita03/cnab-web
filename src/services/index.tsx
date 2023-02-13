import axios from "axios";
import { ICnab } from "../contexts/cnabContext";

export interface IStore {
    id: number
    name: string
    balance: number
    operations: ICnab[]
}

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    timeout: 5000
})

export default api

export const getAllCnabs = async () => {
    const { data } = await api.get<ICnab[]>("/api/cnab/")

    return data
}

export const getStoreById = async (id: number | string) => {
    const { data } = await api.get<IStore>(`/api/store/${id}`)

    return data
}

export const createCnab = async (file: File) => {
    const { data, status } = await api.post<ICnab[]>("api/cnab/", {data: file}, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    if (status === 201) return data
}