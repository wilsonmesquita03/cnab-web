import { Link } from "react-router-dom"

interface ICnab {
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

interface ICardProps {
    cnab: ICnab
}

const Card = ({cnab}: ICardProps) => {
    return (
        <tr>
            <td>{cnab.id}</td>
            <td>{cnab.type}</td>
            <td>{cnab.date}</td>
            <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(cnab.value)}</td>
            <td>{cnab.cpf}</td>
            <td>{cnab.card}</td>
            <td><Link to={`store/${cnab.id}`}>{cnab.store}</Link></td>
            <td>{cnab.nature}</td>
            <td>{cnab.hour}</td>
        </tr>
    )
}

export default Card