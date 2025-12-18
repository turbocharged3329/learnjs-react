import styles from './default.module.css'

import { ThemeSwitcher } from '../../components/layouts/default/theme-switcher'
import { UserAuthBlock } from '../../components/layouts/default/UserAuthBlock/user-auth-block.jsx'

export const DefaultLayout = ({ title, children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.layoutInner}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>{title}</h1>

                    <div className={styles.headerRight}>
                        <ThemeSwitcher className={styles.headerSwitcher} />
                        <UserAuthBlock />
                    </div>
                </header>

                <main className={styles.content}>{children}</main>

                <footer className={styles.footer}>Restaurants</footer>
            </div>
        </div>
    )
}
