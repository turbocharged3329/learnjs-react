import styles from '@/assets/css/ui/tab-item.module.css'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '@/redux/entities/restaurants/slice'
import { NavLink } from 'react-router'
import cn from 'classnames'

export const RestaurantsTabItem = ({ restaurantId }) => {
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    )

    if (!restaurant) {
        return null
    }

    const { name } = restaurant

    return (
        <NavLink
            className={({ isActive }) =>
                cn(styles.tabItem, isActive && styles.active)
            }
            to={`/restaurants/${restaurantId}`}
        >
            {name}
        </NavLink>
    )
}
