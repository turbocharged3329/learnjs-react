import styles from './r-review-form.module.css'
import {
    RATING_VARIANTS,
    FEEDBACK_FORM_ACTIONS,
} from '@/constants/restauratns.js'
import { useReducer } from 'react'
import { RCounter } from '@/components/common/RCounter/RCounter.jsx'

const INITIAL_FORM = {
    name: '',
    feedbackText: '',
    rating: RATING_VARIANTS[0].value,
}

function formReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_NAME': {
            return {
                ...state,
                name: action.payload.name,
            }
        }

        case 'UPDATE_FEEDBACK_TEXT': {
            return {
                ...state,
                feedbackText: action.payload.feedbackText,
            }
        }

        case 'UPDATE_RATING': {
            return {
                ...state,
                rating: action.payload.rating,
            }
        }

        case 'CLEAR_FORM': {
            return {
                ...INITIAL_FORM,
            }
        }

        default: {
            throw new Error('Unknown form action type')
        }
    }
}

export const RReviewForm = () => {
    const [form, dispatch] = useReducer(formReducer, INITIAL_FORM)

    function handleNameUpdate(value) {
        dispatch({
            type: FEEDBACK_FORM_ACTIONS.UPDATE_NAME,
            payload: { name: value },
        })
    }

    function handleFeedbackTextUpdate(value) {
        dispatch({
            type: FEEDBACK_FORM_ACTIONS.UPDATE_FEEDBACK_TEXT,
            payload: {
                feedbackText: value,
            },
        })
    }

    function handleRatingUpdate(value) {
        dispatch({
            type: FEEDBACK_FORM_ACTIONS.UPDATE_RATING,
            payload: {
                rating: value,
            },
        })
    }

    return (
        <form
            className={styles.root}
            onSubmit={(e) => e.preventDefault()}
        >
            <section className={styles.reviewFormSection}>
                <label
                    className={styles.reviewFormLabel}
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(event) => handleNameUpdate(event.target.value)}
                />
            </section>

            <section className={styles.reviewFormSection}>
                <label
                    className={styles.reviewFormLabel}
                    htmlFor="text"
                >
                    Review
                </label>
                <textarea
                    id="text"
                    value={form.feedbackText}
                    onChange={(event) =>
                        handleFeedbackTextUpdate(event.target.value)
                    }
                />
            </section>

            <section className={styles.reviewFormSection}>
                <label className={styles.reviewFormLabel}>Rating</label>
                <div>
                    <RCounter
                        minValue={1}
                        value={form.rating}
                        onChange={handleRatingUpdate}
                    />
                </div>
            </section>

            <section className={styles.reviewFormActions}>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({ type: FEEDBACK_FORM_ACTIONS.CLEAR_FORM })
                    }
                >
                    Clear
                </button>
                <button type="submit">Send</button>
            </section>
        </form>
    )
}
