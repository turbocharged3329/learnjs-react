import './r-scroll-progress.css'
import { useState, useEffect } from 'react'

export const RScrollProgress = () => {
    function getScrollProgress() {
        let scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        )

        let progress = Math.floor(
            (window.scrollY /
                (scrollHeight - document.documentElement.clientHeight)) *
                100
        )

        return isNaN(progress) ? 0 : progress
    }

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
            ></div>
        </div>
    )
}
