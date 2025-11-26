export const DefaultLayout = ({ title, children }) => {
    return (
        <>
            <header>
                <h1>{title}</h1>
            </header>
            <div>{children}</div>
            <footer style={{ padding: '1rem 0' }}>Footer</footer>
        </>
    )
}
