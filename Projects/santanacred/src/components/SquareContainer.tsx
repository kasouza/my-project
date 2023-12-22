import {FC, MutableRefObject, useEffect, useRef} from "react"

type Props = {
    children?: React.ReactNode,
    matchWidthToHeight?: boolean,
    className?: string,
}

const SquareContainer: FC<Props> = ({className, children, matchWidthToHeight}) => {
    const ref: MutableRefObject<HTMLDivElement | null> = useRef(null)

    const resizeToSquare = () => {
        if (ref.current) {
            if (matchWidthToHeight) {
                const height = ref.current.clientHeight
                ref.current.style.width = `${height}px`
            } else {
                const width = ref.current.clientWidth
                ref.current.style.height = `${width}px`
            }
        }
    }

    useEffect(() => {
        resizeToSquare()
        window.addEventListener('resize', resizeToSquare)

        return () => {
            window.removeEventListener('resize', resizeToSquare)
        }
    }, []);

    return (
        <div ref={ref} className={'relative w-full ' + (className || '')}>
            {children}
        </div>
    )
}
export default SquareContainer;
