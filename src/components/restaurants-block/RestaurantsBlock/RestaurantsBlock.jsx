import { useState } from 'react'
import styles from './restaurants-block.module.css'
import { RestaurantItemContainer } from '../RestaurantsItem/RestaurantItemContainer.jsx'
import { RestaurantsTab } from '../RestaurantsTab/RestaurantsTab.jsx'
import { useSelector } from 'react-redux'
import { selectRestaurantIds } from '@/redux/entities/restaurants/slice.js'

export const RestaurantsBlock = () => {
    const restaurantsIds = useSelector(selectRestaurantIds)

    const [activeRestaurantTabId, setActiveRestaurantTabId] = useState(
        restaurantsIds[0]
    )

    return (
        <section className={styles.root}>
            <div className={styles.tabsCard}>
                <div className={styles.tabs}>
                    {restaurantsIds.map((id) => {
                        return (
                            <RestaurantsTab
                                key={id}
                                restaurantId={id}
                                isActive={id === activeRestaurantTabId}
                                onClick={() => setActiveRestaurantTabId(id)}
                            />
                        )
                    })}
                </div>
            </div>

            <div className={styles.contentCard}>
                <RestaurantItemContainer
                    key={activeRestaurantTabId}
                    restaurantId={activeRestaurantTabId}
                />
            </div>
        </section>
    )
}
