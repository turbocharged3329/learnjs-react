import { RestaurantItemContainer } from '@/components/restaurants-block/RestaurantsItem/RestaurantItemContainer.jsx'
import styles from './restaurant-detail.module.css'

export const RestaurantDetail = () => {
    return (
        <div className={styles.contentCard}>
            <RestaurantItemContainer />
        </div>
    )
}
