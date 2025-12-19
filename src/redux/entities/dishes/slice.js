import { normalizedDishes } from '@/constants/normalized-mocks'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ids: normalizedDishes.map(({ id }) => id),
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish
        return acc
    }, {}),
}

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    selectors: {
        selectDishById: (state, id) => state.entities[id],
    },
})

export const { selectDishById, selectDishIds } = dishesSlice.selectors
