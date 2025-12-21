import { useSelector } from 'react-redux'
import { selectRestaurantById } from '@/redux/entities/restaurants/slice'
import cn from 'classnames'
import styles from './restaurant-tab.module.css'

export const RestaurantsTab = ({ restaurantId, ...props }) => {
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    )

    if (!restaurant) {
        return null
    }

    const { name } = restaurant

    return (
        <button
            type="button"
            className={cn(styles.root, { [styles.active]: props.isActive })}
            onClick={props.onClick}
        >
            {name}
        </button>
    )
}
