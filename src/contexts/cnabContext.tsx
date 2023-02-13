import { createContext, Dispatch, SetStateAction } from "react";
import { ReactNode, useEffect, useState } from "react"
import { getAllCnabs, IStore } from "../services";

export const cnabContext = createContext({} as ICnabContextProps)

interface ICnabContextProps {
    cnabList: ICnab[]
    setCnabList: any
}

export interface ICnab {
    id: number
    type: string
    date: string
    value: number
    cpf: string
    card: string
    nature: "exit" | "entrance"
    hour: string
    store: IStore
}

interface ICnabProviderProps {
    children: ReactNode
}

const CnabProvider = ({children}: ICnabProviderProps) => {
    const [cnabList, setCnabList] = useState<ICnab[]>([])

    useEffect(() => {
        const fn = async () => {
            const cnabs = await getAllCnabs()
            setCnabList(cnabs)

        }
        fn()
    }, [])


    return (
        <cnabContext.Provider value={{cnabList, setCnabList}}>
            {children}
        </cnabContext.Provider>
    )
}

export default CnabProvider