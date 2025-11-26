export const RestaurantsListItemFeedback = ({ title, reviews }) => {
    return (
        <div>
            <h3>{title}:</h3>
            <ul>
                {reviews.map((feedbackItem) => (
                    <li key={feedbackItem.id}>
                        <b>
                            {feedbackItem.user} ({feedbackItem.rating})
                        </b>
                        <p>{feedbackItem.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
