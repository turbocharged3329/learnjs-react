import { ThemeContextProvider } from '@/components/theme-context/theme-context-provider.jsx'
import { UserContextProvider } from '@/components/user-context/user-context-provider.jsx'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { BrowserRouter, Routes, Route } from 'react-router'
import { HomePage } from '@/pages/home/HomePage.jsx'
import { RestaurantsPage } from '@/pages/restaurants/RestauratnsPage.jsx'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="/restaurants"
                                element={<RestaurantsPage />}
                            />
                        </Routes>
                    </BrowserRouter>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
}
