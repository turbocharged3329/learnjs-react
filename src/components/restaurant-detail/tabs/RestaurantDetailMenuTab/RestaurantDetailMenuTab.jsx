import { RestaurantsItemMenu } from '@/components/restaurants-block/RestaurantsItemMenu/RestaurantsItemMenu.jsx'
import { useOutletContext } from 'react-router'
import styles from './restaurant-detail-menu-tab.module.css'

export const RestaurantDetailMenuTab = () => {
    const { menu } = useOutletContext()

    return (
        <div>
            {menu.length > 0 ? (
                <RestaurantsItemMenu title="Menu" menu={menu} />
            ) : (
                <p className={styles.empty}>No menu</p>
            )}
        </div>
    )
}
