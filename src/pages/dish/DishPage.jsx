import { useParams } from 'react-router'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectDishById } from '@/redux/entities/dishes/slice.js'
import { UserContext } from '@/components/user-context/user-context.jsx'
import { RCounter } from '@/components/common/RCounter/RCounter.jsx'
import styles from '@/components/restaurants-block/RestaurantsItemMenuItem/restaurants-item-menu-item.module.css'
import {
    addToCard,
    deleteFromCart,
    selectAmountById,
} from '@/redux/entities/cart/slice.js'

export const DishPage = () => {
    const { id } = useParams()
    const { user } = useContext(UserContext)

    const dish = useSelector((state) => selectDishById(state, id))
    const amount = useSelector((state) => selectAmountById(state, id))
    const dispatch = useDispatch()

    const onIncrease = () => {
        dispatch(addToCard(id))
    }

    const onDecrease = () => {
        dispatch(deleteFromCart(id))
    }

    if (!dish) {
        return null
    }

    const { name, price, ingredients } = dish

    return (
        <section className={styles.root}>
            <div className={styles.header}>
                <h1 className={styles.name}>{name}</h1>
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
        </section>
    )
}
