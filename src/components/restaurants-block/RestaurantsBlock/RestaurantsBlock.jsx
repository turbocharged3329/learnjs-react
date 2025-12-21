import styles from './restaurants-block.module.css'
import { RestaurantsTabItem } from '../RestaurantsTabItem/RestaurantsTabItem.jsx'
import { useSelector } from 'react-redux'
import { selectRestaurantIds } from '@/redux/entities/restaurants/slice.js'
import { Outlet } from 'react-router'

export const RestaurantsBlock = () => {
    const restaurantsIds = useSelector(selectRestaurantIds)

    return (
        <section className={styles.root}>
            <div className={styles.tabsCard}>
                <div className={styles.tabs}>
                    {restaurantsIds.map((id) => {
                        return <RestaurantsTabItem key={id} restaurantId={id} />
                    })}
                </div>
            </div>

            <Outlet />
        </section>
    )
}
