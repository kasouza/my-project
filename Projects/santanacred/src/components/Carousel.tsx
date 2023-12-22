import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC, MutableRefObject, ReactNode, useEffect, useRef, useState} from "react";

type Props = {
    children: ReactNode[]
};

type ChildProps = {
    width: Number,
    children?: ReactNode,
};

//const Child: FC<ChildProps> = ({width, children}) => {
//return (
//<div style={{width: `${width}px`}}>
//{children}
//</div>
//)
//};

//const Carousel: FC<Props> = ({children}) => {
//const [currentIdx, setCurrentIdx] = useState(0)
//const [childWidth, setChildWidth] = useState(0)

//const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

//useEffect(() => {
//const resizeChildren = () => {
//if (containerRef.current) {
//setChildWidth(containerRef.current.clientWidth)
//}
//}

//resizeChildren();
//window.addEventListener('resize', resizeChildren)

//return () => {
//window.removeEventListener('resize', resizeChildren)
//}
//}, [])

//return (
//<div ref={containerRef} className="flex">
//{children.map(child => {
//return (
//<Child width={childWidth}>
//{child}
//</Child>
//)
//})}
//</div>
//)
//}

const Carousel: FC<Props> = ({children}) => {
    const [currentIdx, setCurrentIdx] = useState(0)

    const increment = () => {
        const newIdx = currentIdx + 1;
        setCurrentIdx(newIdx >= children.length
            ? 0
            : newIdx
        )
    }

    const decrement = () => {
        const newIdx = currentIdx - 1;
        setCurrentIdx(newIdx < 0
            ? children.length - 1
            : newIdx
        )
    }

    return (
        <div className="w-full">
            <div className="flex items-center gap-4 p-4 h-fit">
                <button className="h-full text-white p-2 py-8" onClick={decrement}>
                    <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
                </button>

                <div className="w-full">
                    {children[currentIdx] || children[0]}
                </div>

                <button className="h-full text-white p-2 py-8" onClick={increment}>
                    <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
                </button>
            </div>

            <ol className="flex gap-2 justify-center py-4">
                {children.map((_, idx) => {
                    const isCurrent = idx === currentIdx
                    const opacity = isCurrent ? 'scale-110' : 'scale-90 bg-opacity-50';
                    return (
                        <div className={`${opacity} bg-gray-800 w-1.5 h-1.5 rounded-full transition-all`}></div>
                    )
                })}
            </ol>
        </div>
    )
}

export default Carousel;
