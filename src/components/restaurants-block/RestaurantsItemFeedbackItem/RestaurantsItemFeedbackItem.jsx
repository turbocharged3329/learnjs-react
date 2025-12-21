import styles from './restaurants-item-feedback-item.module.css'

export const RestaurantsItemFeedbackItem = ({ userName, rating, text }) => {
    return (
        <li className={styles.root}>
            <b className={styles.itemUser}>
                {userName} ({rating})
            </b>
            <p className={styles.itemText}>{text}</p>
        </li>
    )
}
