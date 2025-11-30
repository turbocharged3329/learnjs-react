import { RCounter } from '@/components/common/RCounter.jsx'
import { RestaurantsItemMenuItem } from '@/components/restaurants-block/RestaurantsItemMenuItem.jsx'

export const RestaurantsItemMenu = ({ title, menu }) => {
    return (
        <div>
            <h3>{title}:</h3>

            <ul>
                {menu.map((item) => (
                    <RestaurantsItemMenuItem key={item.id} menuItem={item} />
                ))}
            </ul>
        </div>
    )
}
