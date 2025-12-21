import { useSelector } from 'react-redux'
import { selectRestaurantById } from '@/redux/entities/restaurants/slice'
import { RestaurantsItem } from './RestaurantsItem'

export const RestaurantItemContainer = ({ restaurantId }) => {
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    )

    if (!restaurant) {
        return null
    }

    return <RestaurantsItem restaurant={restaurant} />
}
