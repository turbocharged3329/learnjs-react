import { useState } from 'react'

export const RestaurantsListItemMenu = ({ title, menu }) => {
    const [menuWithCounters, setMenuWithCounters] = useState(() => {
        return menu.reduce((acc, curr) => {
            acc[curr.id] = {
                ...curr,
                counter: 0,
            }

            return acc
        }, {})
    })

    function increment(id) {
        let counter = menuWithCounters[id].counter

        if (counter < 5) {
            counter++
        }

        setMenuWithCounters({
            ...menuWithCounters,
            [id]: {
                ...menuWithCounters[id],
                counter,
            },
        })
    }

    function decrement(id) {
        let counter = menuWithCounters[id].counter

        if (counter > 0) {
            counter--
        }

        setMenuWithCounters({
            ...menuWithCounters,
            [id]: {
                ...menuWithCounters[id],
                counter,
            },
        })
    }

    return (
        <div>
            <h3>{title}:</h3>

            <ul>
                {Object.values(menuWithCounters).map((item) => (
                    <li key={item.id}>
                        <p
                            style={{
                                textDecoration: 'underline',
                            }}
                        >
                            {item.name}
                        </p>

                        <b>Price: {item.price}</b>

                        <div style={{ marginBottom: '1rem' }}>
                            <p>Ingredients:</p>
                            <ul>
                                {item.ingredients.map((ingredient) => (
                                    <li key={String(ingredient)}>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <button
                                type="button"
                                style={{
                                    marginRight: '1rem',
                                }}
                                disabled={item.counter <= 0}
                                onClick={() => decrement(item.id)}
                            >
                                -
                            </button>
                            {item.counter}
                            <button
                                type="button"
                                style={{
                                    marginLeft: '1rem',
                                }}
                                disabled={item.counter >= 5}
                                onClick={() => increment(item.id)}
                            >
                                +
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
