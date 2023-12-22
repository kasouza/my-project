import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function CallToActionButton() {
    return (
        <a href="https://api.whatsapp.com/send?phone=553432259969&text=Quero%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20saque%20FGTS(Ly1)" className="w-fit animate-grow-and-shrink flex items-center text-lg gap-4 bg-green-wpp-light text-white px-10 p-5 rounded-full whitespace-nowrap">
            <span>Fale conosco</span>
            <FontAwesomeIcon className="w-5 h-5" icon={faWhatsapp} />
        </a>
    )
}
