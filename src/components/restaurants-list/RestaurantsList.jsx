import { restaurants } from '@/constants/mock.js'
import { RestaurantsListItem } from './RestaurantsListItem.jsx'
import { useState } from 'react'

const tabsList = restaurants.map((restaurant) => {
    return {
        id: restaurant.id,
        name: restaurant.name,
    }
})

export const RestaurantsList = () => {
    const [activeTab, setActiveTab] = useState(tabsList[0].id)

    return (
        <>
            <section>
                {tabsList.map((tab) => {
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.name}
                        </button>
                    )
                })}
            </section>

            <RestaurantsListItem
                restaurant={restaurants.find(
                    (restaurant) => restaurant.id === activeTab
                )}
            />

            {/*<div>*/}
            {/*    {restaurants.map((restaurant) => {*/}
            {/*        return (*/}
            {/*            <RestaurantsListItem*/}
            {/*                key={restaurant.id}*/}
            {/*                restaurant={restaurant}*/}
            {/*            />*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}
        </>
    )
}
