import {useEffect, useState} from "react";

export function useKeyPress(targetKey) {
    // based on https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        const downHandler = ({key}) => {
            if (key === targetKey)
                setKeyPressed(true)
        }

        const upHandler = ({key}) => {
            if (key === targetKey)
                setKeyPressed(false)
        }

        window.addEventListener("keydown", downHandler)
        window.addEventListener("keyup", upHandler)

        return () => {
            window.removeEventListener("keydown", downHandler)
            window.removeEventListener("keyup", upHandler)
        }
    }, [targetKey])
    return keyPressed
}