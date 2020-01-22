import { useEffect, useRef } from 'react'

export function useDebouncedEffect(callback, delay, deps = []) {
    const firstUpdate = useRef(true)
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false
        }

        const handler = setTimeout(callback, delay)
        return () => clearTimeout(handler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, ...deps])
}

export default useDebouncedEffect
