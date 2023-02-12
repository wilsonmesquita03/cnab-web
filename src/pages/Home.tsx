import { useContext, useState } from "react"
import List from "../components/List"
import { cnabContext } from "../contexts/cnabContext"

const Home = () => {
    const [file, setFile] = useState("")
    const { cnabList } =  useContext(cnabContext)

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.value)} />
            <List list={cnabList}/>

        </div>

    )
}

export default Home