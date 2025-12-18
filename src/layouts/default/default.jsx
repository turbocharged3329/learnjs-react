import styles from './default.module.css'
import { RSwitcher } from '@/components/common/RSwitcher/RSwitcher.jsx'
import { useContext } from 'react'
import { ThemeContext } from '@/components/theme-context/theme-context.jsx'
import { COLOR_THEME_VALUES } from '@/constants/index.js'
import { UserContext } from '@/components/user-context/user-context.jsx'

export const DefaultLayout = ({ title, children }) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { user, login, logout } = useContext(UserContext)

    const isLight = theme === COLOR_THEME_VALUES.light

    function handleThemeToggle() {
        setTheme((current) =>
            current === COLOR_THEME_VALUES.light
                ? COLOR_THEME_VALUES.black
                : COLOR_THEME_VALUES.light
        )
    }

    return (
        <div className={styles.layout}>
            <div className={styles.layoutInner}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>{title}</h1>
                    <div className={styles.headerRight}>
                        <RSwitcher
                            className={styles.headerSwitcher}
                            checked={isLight}
                            onChange={handleThemeToggle}
                        />

                        {!user ? (
                            <button
                                type="button"
                                className={styles.authButton}
                                onClick={login}
                            >
                                Sign in
                            </button>
                        ) : (
                            <>
                                <span className={styles.userName}>
                                    {user.name}
                                </span>
                                <button
                                    type="button"
                                    className={styles.authButton}
                                    onClick={logout}
                                >
                                    Sign out
                                </button>
                            </>
                        )}
                    </div>
                </header>

                <main className={styles.content}>{children}</main>

                <footer className={styles.footer}>Restaurants</footer>
            </div>
        </div>
    )
}
