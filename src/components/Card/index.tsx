import { Link } from "react-router-dom"
import { ICnab } from "../../contexts/cnabContext"

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
            <td><Link to={`store/${cnab.store.id}`}>{cnab.store.name}</Link></td>
            <td>{cnab.nature}</td>
            <td>{cnab.hour}</td>
        </tr>
    )
}

export default Card