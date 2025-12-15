import styles from './default.module.css'
import { RSwitcher } from '@/components/common/RSwitcher/RSwitcher.jsx'
import { useContext } from 'react'
import { ThemeContext } from '@/components/theme-context/theme-context.jsx'
import { COLOR_THEME_VALUES } from '@/constants/index.js'

export const DefaultLayout = ({ title, children }) => {
    const { theme, setTheme } = useContext(ThemeContext)

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
            <div className={styles['layout-inner']}>
                <header className={styles.header}>
                    <h1 className={styles['header-title']}>{title}</h1>
                    <RSwitcher
                        className={styles['header-switcher']}
                        checked={isLight}
                        onChange={handleThemeToggle}
                    />
                </header>

                <main className={styles.content}>{children}</main>

                <footer className={styles.footer}>Restaurants</footer>
            </div>
        </div>
    )
}
