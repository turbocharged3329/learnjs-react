import { useSelector } from 'react-redux'
import { selectFeedbackById } from '@/redux/entities/feedbacks/slice'
import { RestaurantsItemFeedbackItem } from './RestaurantsItemFeedbackItem'
import { selectUserById } from '@/redux/entities/users/slice'

export const RestaurantsItemFeedbackItemContainer = ({ feedbackId }) => {
    const feedback = useSelector((state) =>
        selectFeedbackById(state, feedbackId)
    )
    const user = useSelector((state) => selectUserById(state, feedback?.userId))

    if (!feedback || !user) {
        return null
    }

    const { rating, text } = feedback
    const { name } = user

    return (
        <RestaurantsItemFeedbackItem
            userName={name}
            rating={rating}
            text={text}
        />
    )
}
