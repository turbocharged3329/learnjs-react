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
import { DishPage } from '@/pages/dish/DishPage.jsx'
import { DefaultLayout } from '@/layouts/default/default.jsx'
import { BackButton } from '@/components/layouts/default/header/back-button.jsx'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="*" element={<Navigate to="/" />} />
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
                            <Route
                                path="/dish/:id"
                                element={
                                    <DefaultLayout
                                        title="Dish"
                                        headerLeft={<BackButton />}
                                    >
                                        <DishPage />
                                    </DefaultLayout>
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
}
