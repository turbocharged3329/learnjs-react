import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        addToCard: (state, action) => {
            const { payload } = action

            state[payload] = (state[payload] || 0) + 1
        },
        deleteFromCart: (state, action) => {
            if (!state[action.payload]) {
                return state
            }

            state[action.payload] = state[action.payload] - 1

            if (state[action.payload] === 0) {
                delete state[action.payload]
            }
        },
    },
    selectors: {
        selectCartItems: (state) =>
            Object.keys(state).reduce((acc, id) => {
                acc.push({
                    id,
                    count: state[id],
                })
                return acc
            }, []),
        selectAmountById: (state, id) => state[id] || 0,
    },
})

export const { selectCartItems, selectAmountById } = cartSlice.selectors

export const { addToCard, deleteFromCart } = cartSlice.actions
