import { RSwitcher } from '@/components/common/RSwitcher/RSwitcher.jsx'
import { useContext, useMemo } from 'react'
import { ThemeContext } from '@/components/theme-context/theme-context.jsx'
import { COLOR_THEME_VALUES } from '@/constants/index.js'

export const ThemeSwitcher = ({ className }) => {
    const { theme, setThemeHandler } = useContext(ThemeContext)
    const isLight = useMemo(() => theme === COLOR_THEME_VALUES.light, [theme])

    function handleThemeToggle() {
        setThemeHandler(
            isLight ? COLOR_THEME_VALUES.black : COLOR_THEME_VALUES.light
        )
    }

    return (
        <RSwitcher
            className={className}
            checked={isLight}
            onChange={handleThemeToggle}
        />
    )
}
