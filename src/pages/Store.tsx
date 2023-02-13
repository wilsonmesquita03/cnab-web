import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import List from "../components/List"
import { getStoreById, IStore } from "../services"



const Store = () => {
    const [store, setStore] = useState<IStore | null>(null)
    const { store_id } = useParams()

    useEffect(() => {
        const fn = async () => {
            const data = await getStoreById(store_id!)

            setStore(data)
        }
        fn()
    }, [])

    return (
        <div>
            <h1>BALANCE: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(store?.balance!)}</h1>
            <List list={store?.operations}/>
        </div>
    )
}

export default Store