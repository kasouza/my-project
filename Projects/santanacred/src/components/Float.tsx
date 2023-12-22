import {FC, ReactNode} from "react";

type Props = {
    children?: ReactNode
}

const Float: FC<Props> = ({children}) => {
    return (
        <div className="fixed bottom-10 right-10">
            {children}
        </div>
    )
}

export default Float
