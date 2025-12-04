import styles from './restaurants-item-feedback.module.css'

export const RestaurantsItemFeedback = ({ title, reviews }) => {
    return (
        <div className={styles['restaurants-item-feedback']}>
            <h3 className={styles['restaurants-item-feedback__title']}>
                {title}
            </h3>
            <ul className={styles['restaurants-item-feedback__list']}>
                {reviews.map((feedbackItem) => (
                    <li
                        key={feedbackItem.id}
                        className={styles['restaurants-item-feedback__item']}
                    >
                        <b
                            className={
                                styles['restaurants-item-feedback__item-user']
                            }
                        >
                            {feedbackItem.user} ({feedbackItem.rating})
                        </b>
                        <p
                            className={
                                styles['restaurants-item-feedback__item-text']
                            }
                        >
                            {feedbackItem.feedbackText}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
