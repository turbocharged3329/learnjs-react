import { RestaurantsItemMenu } from '@/components/restaurants-block/RestaurantsItemMenu.jsx'
import { RestaurantsItemFeedback } from '@/components/restaurants-block/RestaurantsItemFeedback.jsx'
import { RReviewForm } from '@/components/common/RReviewForm/RReviewForm.jsx'

export const RestaurantsItem = ({ restaurant }) => {
    const { id, name, menu, reviews } = restaurant

    return (
        <section style={{ borderBottom: '1px solid gray' }}>
            <h2>{name}</h2>

            {menu.length > 0 ? (
                <RestaurantsItemMenu title="Menu" menu={menu} />
            ) : (
                <p>No menu</p>
            )}

            {reviews.length > 0 ? (
                <RestaurantsItemFeedback title="Feedback" reviews={reviews} />
            ) : (
                <p>No feedback</p>
            )}

            <RReviewForm restaurantId={id} />
        </section>
    )
}
