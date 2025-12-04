import { RCounter } from '@/components/common/RCounter/RCounter.jsx'
import { RestaurantsItemMenuItem } from '@/components/restaurants-block/RestaurantsItemMenuItem/RestaurantsItemMenuItem.jsx'
import styles from './restaurants-item-menu.module.css'

export const RestaurantsItemMenu = ({ title, menu }) => {
    return (
        <div className={styles['restaurants-item-menu']}>
            <h3 className={styles['restaurants-item-menu__title']}>{title}</h3>

            <ul className={styles['restaurants-item-menu__list']}>
                {menu.map((item) => (
                    <RestaurantsItemMenuItem key={item.id} menuItem={item} />
                ))}
            </ul>
        </div>
    )
}
