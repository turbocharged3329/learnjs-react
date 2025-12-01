import './r-scroll-progress.css'
import { useState, useEffect } from 'react'
import { getScrollProgress } from '@/utils/page.js'

export const RScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        function handleScroll() {
            setScrollProgress(getScrollProgress())
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="r-scroll-progress">
            <div
                className="r-scroll-progress__filler"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    )
}
