import styles from './restaurants-item-menu-item.module.css'
import { RCounter } from '@/components/common/RCounter/RCounter.jsx'
import { useContext } from 'react'
import { UserContext } from '@/components/user-context/user-context.jsx'
import { useSelector } from 'react-redux'
import { selectDishById } from '@/redux/entities/dishes/slice.js'
import { selectAmountById } from '@/redux/entities/cart/slice.js'
import { useDispatch } from 'react-redux'
import { addToCard, deleteFromCart } from '@/redux/entities/cart/slice.js'
import { Link } from 'react-router'

export const RestaurantsItemMenuItem = ({ menuDishId }) => {
    const { user } = useContext(UserContext)

    const amount = useSelector((state) => selectAmountById(state, menuDishId))
    const dish = useSelector((state) => selectDishById(state, menuDishId))

    const dispatch = useDispatch()

    const onIncrease = () => {
        dispatch(addToCard(menuDishId))
    }
    const onDecrease = () => {
        dispatch(deleteFromCart(menuDishId))
    }
    if (!dish) {
        return null
    }

    const { name, price, ingredients } = dish

    return (
        <Link to={`/dish/${menuDishId}`}>
            <li className={styles.root}>
                <div className={styles.header}>
                    <p className={styles.name}>{name}</p>
                    <b className={styles.price}>${price}</b>
                </div>

                <div>
                    <p className={styles.ingredientsLabel}>Ingredients</p>
                    <ul className={styles.ingredientsList}>
                        {ingredients.map((ingredient) => (
                            <li key={String(ingredient)}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                {user ? (
                    <div className={styles.footer}>
                        <RCounter
                            value={amount}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                        />
                    </div>
                ) : null}
            </li>
        </Link>
    )
}
