import { RCounter } from '@/components/common/RCounter.jsx'

export const RestaurantsItemMenuItem = ({ menuItem }) => {
    const { name, price, ingredients } = menuItem

    return (
        <li>
            <p
                style={{
                    textDecoration: 'underline',
                }}
            >
                {name}
            </p>

            <b>Price: {price}</b>

            <div style={{ marginBottom: '1rem' }}>
                <p>Ingredients:</p>
                <ul>
                    {ingredients.map((ingredient) => (
                        <li key={String(ingredient)}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <RCounter />
        </li>
    )
}
