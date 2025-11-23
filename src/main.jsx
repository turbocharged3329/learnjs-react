import { createRoot } from 'react-dom/client'
import { restaurants } from './constants/mock.js'

const root = document.getElementById('root')
const reactRoot = createRoot(root)

reactRoot.render(
    <div>
        {restaurants.map((restaurant) => {
            return (
                <section
                    key={restaurant.id}
                    style={{ borderBottom: '1px solid gray' }}
                >
                    <h2>{restaurant.name}</h2>

                    <div>
                        <h3>Menu:</h3>
                        <ul>
                            {restaurant.menu.map((item) => (
                                <li key={item.id}>
                                    <p
                                        style={{
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        {item.name}
                                    </p>

                                    <b>Price: {item.price}</b>

                                    <div>
                                        <p>Ingredients:</p>
                                        <ul>
                                            {item.ingredients.map(
                                                (ingredient) => (
                                                    <li
                                                        key={String(ingredient)}
                                                    >
                                                        {ingredient}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3>Feedback:</h3>
                        <ul>
                            {restaurant.reviews.map((feedbackItem) => (
                                <li key={feedbackItem.id}>
                                    <b>
                                        {feedbackItem.user} (
                                        {feedbackItem.rating})
                                    </b>
                                    <p>{feedbackItem.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )
        })}
    </div>
)
