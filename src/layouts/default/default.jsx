import styles from './default.module.css'

export const DefaultLayout = ({ title, children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles['layout-inner']}>
                <header className={styles.header}>
                    <h1 className={styles['header-title']}>{title}</h1>
                </header>

                <main className={styles.content}>{children}</main>

                <footer className={styles.footer}>Restaurants</footer>
            </div>
        </div>
    )
}
