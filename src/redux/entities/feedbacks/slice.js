import { createSlice } from '@reduxjs/toolkit'
import { normalizedReviews } from '@/constants/normalized-mocks'

const initialState = {
    ids: normalizedReviews.map(({ id }) => id),
    entities: normalizedReviews.reduce((acc, feedback) => {
        acc[feedback.id] = feedback
        return acc
    }, {}),
}

export const feedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    selectors: {
        selectFeedbackById: (state, id) => state.entities[id],
        selectFeedbackIds: (state) => state.ids,
    },
})

export const { selectFeedbackById, selectFeedbackIds } =
    feedbacksSlice.selectors
