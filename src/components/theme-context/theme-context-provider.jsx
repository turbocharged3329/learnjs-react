import { useEffect, useState } from 'react'
import { ThemeContext } from '@/components/theme-context/theme-context.jsx'
import { COLOR_THEME_VALUES } from '@/constants/index.js'

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(COLOR_THEME_VALUES.black)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
