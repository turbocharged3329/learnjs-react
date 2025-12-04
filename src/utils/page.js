export const getScrollProgress = () => {
    let scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    )

    let progress = Math.ceil(
        (window.scrollY /
            (scrollHeight - document.documentElement.clientHeight)) *
            100
    )

    return isNaN(progress) ? 0 : progress
}
