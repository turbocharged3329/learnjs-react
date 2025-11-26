import { RestaurantsListItemMenu } from '@/components/restaurants-list/RestaurantsListItemMenu'
import { RestaurantsListItemFeedback } from '@/components/restaurants-list/RestaurantsListItemFeedback'

export const RestaurantsListItem = ({ restaurant }) => {
    const { id, name, menu, reviews } = restaurant

    return (
        <section key={id} style={{ borderBottom: '1px solid gray' }}>
            <h2>{name}</h2>

            {menu.length > 0 ? (
                <RestaurantsListItemMenu title="Menu" menu={menu} />
            ) : (
                <p>No menu</p>
            )}

            {reviews.length > 0 ? (
                <RestaurantsListItemFeedback
                    title="Feedback"
                    reviews={reviews}
                />
            ) : (
                <p>No feedback</p>
            )}
        </section>
    )
}
