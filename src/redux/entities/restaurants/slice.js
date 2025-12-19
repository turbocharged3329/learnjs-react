import { createSlice } from '@reduxjs/toolkit'
import { normalizedRestaurants } from '@/constants/normalized-mocks'

const initialState = {
    ids: normalizedRestaurants.map(({ id }) => id),
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant

        return acc
    }, {}),
}

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIds: (state) => state.ids,
    },
})

export const { selectRestaurantById, selectRestaurantIds } =
    restaurantsSlice.selectors
