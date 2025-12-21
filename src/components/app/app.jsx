import { ThemeContextProvider } from '@/components/theme-context/theme-context-provider.jsx'
import { UserContextProvider } from '@/components/user-context/user-context-provider.jsx'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { HomePage } from '@/pages/home/HomePage.jsx'
import { RestaurantsPage } from '@/pages/restaurants/RestauratnsPage.jsx'
import { RestaurantDetail } from '../restaurant-detail/RestaurantDetail'
import { RestaurantDetailMenuTab } from '../restaurant-detail/tabs/RestaurantDetailMenuTab/RestaurantDetailMenuTab'
import { RestaurantDetailFeedbackTab } from '../restaurant-detail/tabs/RestaurantDetailFeedbackTab/RestaurantDetailFeedbackTab'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<HomePage />} />
                            <Route
                                path="/restaurants"
                                element={<RestaurantsPage />}
                            >
                                <Route
                                    index
                                    element={<div>No restaurant selected</div>}
                                />
                                <Route
                                    path=":id"
                                    element={<RestaurantDetail />}
                                >
                                    <Route
                                        index
                                        element={<Navigate to="menu" replace />}
                                    />
                                    <Route
                                        path="menu"
                                        element={<RestaurantDetailMenuTab />}
                                    />
                                    <Route
                                        path="feedback"
                                        element={
                                            <RestaurantDetailFeedbackTab />
                                        }
                                    />
                                </Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
}
