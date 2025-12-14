import { useState } from 'react'
import { DefaultLayout } from '@/layouts/default/default.jsx'
import { RScrollProgress } from '@/components/common/RScrollProgress/RScrollProgress.jsx'
import { RestaurantsBlock } from '@/components/restaurants-block/RestaurantsBlock/RestaurantsBlock.jsx'
import { ThemeContext } from '@/components/app/theme-context.jsx'
import { COLOR_THEME_VALUES } from '../../constants'

export const App = () => {
    const [theme, setTheme] = useState(COLOR_THEME_VALUES.black)

    return (
        <ThemeContext value={{ theme, setTheme }}>
            <DefaultLayout title="Restaurants">
                <RScrollProgress />
                <RestaurantsBlock />
            </DefaultLayout>
        </ThemeContext>
    )
}
