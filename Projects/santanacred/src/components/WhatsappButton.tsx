import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {FC} from "react"

type Props = {
    big?: boolean
}

const WhatsappButton: FC<Props> = ({big}) => {
    const size = big ? 'w-20 h-20' : 'w-9 h-9';

    return (
        <a href="https://api.whatsapp.com/send?phone=553432259969&text=Quero%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20saque%20FGTS(Ly1)" className={`${size} hover:scale-105 transition-all bg-green-wpp rounded-full text-white grid place-items-center animate-grow-and-shrink`}>
            <FontAwesomeIcon className={big ? 'text-5xl w-12 h-12' : 'w-6 h-6' }icon={faWhatsapp} />
        </a>
    )
}

export default WhatsappButton
