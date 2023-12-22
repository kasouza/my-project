import {useOpen} from "@/hooks/useOpen";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC, ReactNode, useState} from "react";
import AnimateHeight from 'react-animate-height';

type Props = {
    question: string,
    answer: ReactNode,
};

const FaqQuestion: FC<Props> = ({question, answer}) => {
    const {isOpen, toggle} = useOpen()
    
    const height = isOpen ? 'auto' : 0;
    const transform = `rotate(${isOpen ? 90 : 0}deg)`

    return (
        <div className="w-full">
            <button className="flex justify-between w-full bg-black text-left text-white font-medium px-4 p-3" onClick={toggle}>
                <span>{question}</span>
                <span style={{transform}} className="transition-all text-white font-bold">
                    <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                </span>
            </button>

            <AnimateHeight
                duration={500}
                height={height}
            >
                <div className="border p-4 bg-gray-150 text-black">
                    {answer}
                </div>
            </AnimateHeight>
        </div>
    )
}

export default FaqQuestion
