import { useSelector } from 'react-redux'
import { selectRestaurantById } from '@/redux/entities/restaurants/slice'
import { RestaurantsItem } from './RestaurantsItem'
import { useParams } from 'react-router'

export const RestaurantItemContainer = () => {
    const { id } = useParams()

    const restaurant = useSelector((state) => selectRestaurantById(state, id))

    if (!restaurant) {
        return null
    }

    return <RestaurantsItem restaurant={restaurant} />
}
