import { DefaultLayout } from '@/layouts/default/default.jsx'
import { RScrollProgress } from '@/components/common/RScrollProgress/RScrollProgress.jsx'
import { RestaurantsBlock } from '@/components/restaurants-block/RestaurantsBlock/RestaurantsBlock.jsx'
import { ThemeContextProvider } from '@/components/theme-context/theme-context-provider.jsx'
import { UserContextProvider } from '@/components/user-context/user-context-provider.jsx'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <DefaultLayout title="Restaurants">
                        <RScrollProgress />
                        <RestaurantsBlock />
                    </DefaultLayout>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
}
