import { ReactNode, useContext } from "react"
import { cnabContext, ICnab } from "../../contexts/cnabContext"
import Card from "../Card"
import { TableContainer } from "./styles"

interface IListProps {
    list?: ICnab[] | null
}

const List = ({list}: IListProps) => {
    return (
        <TableContainer>
            <thead>
                <tr>
                    <th>id</th>
                    <th>type</th>
                    <th>date</th>
                    <th>value</th>
                    <th>CPF</th>
                    <th>card</th>
                    <th>store</th>
                    <th>nature</th>
                    <th>hour</th>
                </tr>
            </thead>
            <tbody>
                {list?.map((elem, index) => <Card cnab={elem} key={index}/>)}
            </tbody>
        </TableContainer>
    )
}

export default List