import { useContext, useState } from "react"
import List from "../components/List"
import { cnabContext } from "../contexts/cnabContext"
import { createCnab } from "../services"

const Home = () => {
    const { cnabList, setCnabList } =  useContext(cnabContext)
    const [file, setFile] = useState<File | null>(null)

    console.log(cnabList)

    const handleFile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const newCnabList = await createCnab(file!)

        setCnabList((oldList: any) => [...oldList, newCnabList])
    }

    return (
        <div>
            <form encType="multipart/formdata" onSubmit={(e) => handleFile(e)}>
                <input type="file" onChange={(e) => setFile(e.target.files![0])} name="cnab" />
                <button type="submit"> Enviar </button>
            </form>
            <List list={cnabList}/>
        </div>
    )
}

export default Home