import {useState} from "react";

export function useOpen(initialState: boolean = false) {
    const [isOpen, setOpen] = useState(initialState)

    function open() {
        setOpen(true)
    }

    function close() {
        setOpen(false)
    }

    function toggle() {
        setOpen(!isOpen)
    }

    return {isOpen, open, close, toggle};
}
