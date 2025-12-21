import { configureStore } from '@reduxjs/toolkit'
import { restaurantsSlice } from './entities/restaurants/slice'
import { dishesSlice } from './entities/dishes/slice'
import { feedbacksSlice } from './entities/feedbacks/slice'
import { usersSlice } from './entities/users/slice'
import { cartSlice } from './entities/cart/slice'

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [feedbacksSlice.name]: feedbacksSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
    },
})
