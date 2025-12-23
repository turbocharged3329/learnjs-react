import { useContext } from 'react'
import { UserContext } from '@/components/user-context/user-context.jsx'
import { RestaurantsItemFeedback } from '@/components/restaurants-block/RestaurantsItemFeedback/RestaurantsItemFeedback.jsx'
import { RReviewForm } from '@/components/common/RReviewForm/RReviewForm.jsx'
import styles from './restaurant-detail-feedback-tab.module.css'
import { useOutletContext } from 'react-router'

export const RestaurantDetailFeedbackTab = () => {
    const { reviews } = useOutletContext()
    const { user } = useContext(UserContext)

    return (
        <div>
            {reviews.length > 0 ? (
                <RestaurantsItemFeedback title="Feedback" reviews={reviews} />
            ) : (
                <p className={styles.empty}>No feedback</p>
            )}

            {user ? <RReviewForm /> : null}
        </div>
    )
}
