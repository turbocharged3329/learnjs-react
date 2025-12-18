import { useState, useEffect } from 'react'
import { ThemeContext } from '@/components/theme-context/theme-context.jsx'
import { COLOR_THEME_VALUES } from '@/constants/index.js'

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(COLOR_THEME_VALUES.light)

    const setDocumentDatasetTheme = (themeValue) => {
        document.documentElement.dataset.theme = themeValue
    }

    useEffect(() => {
        setDocumentDatasetTheme(theme)
    })

    const setThemeHandler = (themeValue) => {
        setTheme(themeValue)
        setDocumentDatasetTheme(themeValue)
    }

    return (
        <ThemeContext.Provider value={{ theme, setThemeHandler }}>
            {children}
        </ThemeContext.Provider>
    )
}
