import { RCounter } from '@/components/common/RCounter/RCounter.jsx'
import { useContext, useState } from 'react'
import styles from './restaurants-item-menu-item.module.css'
import { UserContext } from '@/components/user-context/user-context.jsx'

export const RestaurantsItemMenuItem = ({ menuItem }) => {
    const { name, price, ingredients } = menuItem
    const [count, setCount] = useState(0)
    const { user } = useContext(UserContext)

    return (
        <li className={styles['restaurants-item-menu-item']}>
            <div className={styles['restaurants-item-menu-item__header']}>
                <p className={styles['restaurants-item-menu-item__name']}>
                    {name}
                </p>
                <b className={styles['restaurants-item-menu-item__price']}>
                    ${price}
                </b>
            </div>

            <div>
                <p
                    className={
                        styles['restaurants-item-menu-item__ingredients-label']
                    }
                >
                    Ingredients
                </p>
                <ul
                    className={
                        styles['restaurants-item-menu-item__ingredients-list']
                    }
                >
                    {ingredients.map((ingredient) => (
                        <li key={String(ingredient)}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            {user ? (
                <div className={styles['restaurants-item-menu-item__footer']}>
                    <RCounter value={count} onChange={setCount} />
                </div>
            ) : null}
        </li>
    )
}
