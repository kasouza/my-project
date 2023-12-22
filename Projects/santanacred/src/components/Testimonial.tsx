import {FC} from "react";
import Image from "next/image";

type Props = {
    userImage: string,
    userName: string,
    text: string,
}

const Testimonial: FC<Props> = ({userImage, userName, text}) => {
    return (
        <div className="flex flex-col bg-white rounded-lg p-3">
            <div className="flex gap-2 border-b p-2">
                <Image alt="" src={userImage} width={36} height={36} />
                <span>{userName}</span>
            </div>
            <p className="p-2">{text}</p>
        </div>
    )
}

export default Testimonial
