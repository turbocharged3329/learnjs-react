import styles from './default.module.css'

import { ThemeSwitcher } from '../../components/layouts/default/header/theme-switcher'
import { UserAuthBlock } from '../../components/layouts/default/header/UserAuthBlock/user-auth-block.jsx'
import { Cart } from '../../components/layouts/default/header/Cart/Cart.jsx'

export const DefaultLayout = ({ title, children, headerLeft }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.layoutInner}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>{headerLeft}</div>
                    <h1 className={styles.headerTitle}>{title}</h1>

                    <div className={styles.headerRight}>
                        <ThemeSwitcher className={styles.headerSwitcher} />
                        <UserAuthBlock />
                        <Cart />
                    </div>
                </header>

                <main className={styles.content}>{children}</main>

                <footer className={styles.footer}>Restaurants</footer>
            </div>
        </div>
    )
}
