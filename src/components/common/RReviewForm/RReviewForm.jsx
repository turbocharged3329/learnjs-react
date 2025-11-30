import './r-review-form.css'
import {
    RATING_VARIANTS,
    FEEDBACK_FORM_ACTIONS,
} from '@/constants/restauratns.js'
import { useReducer, useEffect } from 'react'
import { RCounter } from '@/components/common/RCounter.jsx'

const INITIAL_FORM = {
    name: '',
    feedback_text: '',
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
                feedback_text: action.payload.feedback_text,
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
            throw new Error('Неизвестный тип действия с формой')
        }
    }
}

export const RReviewForm = ({ restaurantId }) => {
    const [form, dispatch] = useReducer(formReducer, INITIAL_FORM)

    useEffect(() => {
        dispatch({
            type: FEEDBACK_FORM_ACTIONS.CLEAR_FORM,
        })
    }, [restaurantId])

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
                feedback_text: value,
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
        <form className="r-review-form">
            <section className="r-review-form-section">
                <label className="r-review-form-section__label" htmlFor="name">
                    Имя
                </label>
                <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(event) => handleNameUpdate(event.target.value)}
                />
            </section>

            <section className="r-review-form-section">
                <label className="r-review-form-section__label" htmlFor="text">
                    Отзыв
                </label>
                <textarea
                    id="text"
                    value={form.feedback_text}
                    onChange={(event) =>
                        handleFeedbackTextUpdate(event.target.value)
                    }
                />
            </section>

            <section className="r-review-form-section">
                <label className="r-review-form-section__label">Рейтинг</label>
                <div>
                    <RCounter
                        minValue={1}
                        value={form.rating}
                        onChange={handleRatingUpdate}
                    />
                </div>
            </section>

            <section className="r-review-form__actions">
                <button
                    type="button"
                    onClick={() =>
                        dispatch({ type: FEEDBACK_FORM_ACTIONS.CLEAR_FORM })
                    }
                >
                    Очистить
                </button>
                <button type="submit">Отправить</button>
            </section>
        </form>
    )
}
