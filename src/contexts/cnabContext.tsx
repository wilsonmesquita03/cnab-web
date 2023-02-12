import { createContext } from "react";
import { ReactNode, useEffect, useState } from "react"
import { getAllCnabs } from "../services";

export const cnabContext = createContext({} as ICnabContextProps)

interface ICnabContextProps {
    cnabList: ICnab[] | null
}

export interface ICnab {
    id: number
    type: string
    date: string
    value: number
    cpf: string
    card: string
    store: string
    nature: "exit" | "entrance"
    hour: string
}

interface ICnabProviderProps {
    children: ReactNode
}

const CnabProvider = ({children}: ICnabProviderProps) => {
    const [cnabList, setCnabList] = useState<ICnab[] | null>(null)

    useEffect(() => {
        const fn = async () => {
            const cnabs = await getAllCnabs()
            setCnabList(cnabs)

        }
        fn()
    }, [])


    return (
        <cnabContext.Provider value={{cnabList}}>
            {children}
        </cnabContext.Provider>
    )
}

export default CnabProvider