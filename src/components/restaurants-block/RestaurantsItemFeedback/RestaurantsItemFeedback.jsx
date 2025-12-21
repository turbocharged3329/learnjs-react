import { RestaurantsItemFeedbackItemContainer } from '../RestaurantsItemFeedbackItem/RestaurantsItemFeedbackItemContainer'
import styles from './restaurants-item-feedback.module.css'

export const RestaurantsItemFeedback = ({ title, reviews }) => {
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
                {reviews.map((feedbackId) => (
                    <RestaurantsItemFeedbackItemContainer
                        key={feedbackId}
                        feedbackId={feedbackId}
                    />
                ))}
            </ul>
        </div>
    )
}
