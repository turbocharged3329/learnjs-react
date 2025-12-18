import { restaurants } from '@/constants/mock.js'
import { RestaurantsItem } from '../RestaurantsItem/RestaurantsItem.jsx'
import { useState } from 'react'
import cn from 'classnames'
import styles from './restaurants-block.module.css'

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
        <section className={styles.root}>
            <div className={styles.tabsCard}>
                <div className={styles.tabs}>
                    {restaurantsTabsList.map((tab) => {
                        const isActive = tab.id === activeRestaurantTabId

                        return (
                            <button
                                key={tab.id}
                                type="button"
                                className={cn(
                                    styles.tab,
                                    isActive && styles.tabActive
                                )}
                                onClick={() => setActiveRestaurantTabId(tab.id)}
                            >
                                {tab.name}
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className={styles.contentCard}>
                <RestaurantsItem
                    restaurant={restaurants.find(
                        (restaurant) => restaurant.id === activeRestaurantTabId
                    )}
                />
            </div>
        </section>
    )
}
