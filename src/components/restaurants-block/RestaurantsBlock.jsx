import { restaurants } from '@/constants/mock.js'
import { RestaurantsItem } from './RestaurantsItem.jsx'
import { useState } from 'react'

const restaurantsTabsList = restaurants.map((restaurant) => {
    return {
        id: restaurant.id,
        name: restaurant.name,
    }
})

export const RestaurantsBlock = () => {
    const [activeRestaurantTabId, setActiveRestaurantTabId] = useState(
        restaurantsTabsList[0].id
    )

    return (
        <>
            <section>
                {restaurantsTabsList.map((tab) => {
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveRestaurantTabId(tab.id)}
                        >
                            {tab.name}
                        </button>
                    )
                })}
            </section>

            <RestaurantsItem
                restaurant={restaurants.find(
                    (restaurant) => restaurant.id === activeRestaurantTabId
                )}
            />
        </>
    )
}
