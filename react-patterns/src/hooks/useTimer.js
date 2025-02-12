import { useEffect, useRef, useState } from "react";

function useTimer(initialSeconds = 0, isCountdown = false) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null)

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setSeconds((prevSecond) => {
                    if (isCountdown && prevSecond <= 0) {
                        clearInterval(intervalRef);
                        return 0;
                    }

                    return isCountdown ? prevSecond - 1 : prevSecond + 1;
                })
            }, 1000)
        } else if (!isActive && intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        return () => clearInterval(intervalRef.current)
    }, [isActive, isCountdown])

    const start = () => setIsActive(true);
    const stop = () => setIsActive(false);
    const reset = () => {
        setIsActive(false);
        setSeconds(initialSeconds);
    }

    return { seconds, start, stop, reset, isActive }
}

export default useTimer;