import styles from './cart.module.css'
import { useSelector } from 'react-redux'
import { selectCartItems } from '@/redux/entities/cart/slice'
import { useContext } from 'react'
import { UserContext } from '@/components/user-context/user-context.jsx'

export const Cart = () => {
    const { user } = useContext(UserContext)
    const cartItems = useSelector(selectCartItems)

    if (!user) {
        return null
    }

    return (
        <button type="button" className={styles.root}>
            {cartItems.length > 0 ? (
                <div>Cart: {cartItems.length}</div>
            ) : (
                <div>Cart is empty</div>
            )}
        </button>
    )
}
