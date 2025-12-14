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
        <section className={styles['restaurants-block']}>
            <div className={styles['restaurants-block__tabs-card']}>
                <div className={styles['restaurants-block__tabs']}>
                    {restaurantsTabsList.map((tab) => {
                        const isActive = tab.id === activeRestaurantTabId

                        return (
                            <button
                                key={tab.id}
                                type="button"
                                className={cn(
                                    styles['restaurants-block__tab'],
                                    isActive &&
                                        styles['restaurants-block__tab--active']
                                )}
                                onClick={() => setActiveRestaurantTabId(tab.id)}
                            >
                                {tab.name}
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className={styles['restaurants-block__content-card']}>
                <RestaurantsItem
                    restaurant={restaurants.find(
                        (restaurant) => restaurant.id === activeRestaurantTabId
                    )}
                />
            </div>
        </section>
    )
}
