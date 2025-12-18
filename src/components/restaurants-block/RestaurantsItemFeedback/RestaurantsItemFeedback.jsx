import styles from './restaurants-item-feedback.module.css'

export const RestaurantsItemFeedback = ({ title, reviews }) => {
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
                {reviews.map((feedbackItem) => (
                    <li
                        key={feedbackItem.id}
                        className={styles.item}
                    >
                        <b className={styles.itemUser}>
                            {feedbackItem.user} ({feedbackItem.rating})
                        </b>
                        <p className={styles.itemText}>
                            {feedbackItem.feedbackText}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
