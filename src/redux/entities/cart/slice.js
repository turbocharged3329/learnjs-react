import { createSlice, createSelector } from '@reduxjs/toolkit'

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
        selectAmountById: (state, id) => state[id] || 0,
    },
})

const selectCartSlice = (state) => state[cartSlice.name]

export const selectCartItems = createSelector(selectCartSlice, (cartSlice) => {
    return Object.keys(cartSlice).reduce((acc, id) => {
        acc.push({
            id,
            count: cartSlice[id],
        })
        return acc
    }, [])
})
export const { selectAmountById } = cartSlice.selectors

export const { addToCard, deleteFromCart } = cartSlice.actions
