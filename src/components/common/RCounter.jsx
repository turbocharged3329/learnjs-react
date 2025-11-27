import { useState } from 'react'

export const RCounter = () => {
    const [counter, setCounter] = useState(0)

    function increment() {
        if (counter === 5) {
            return
        }

        setCounter(counter + 1)
    }

    function decrement() {
        if (counter === 0) {
            return
        }

        setCounter(counter - 1)
    }

    return (
        <div>
            <button
                type="button"
                style={{
                    marginRight: '1rem',
                }}
                disabled={counter <= 0}
                onClick={decrement}
            >
                -
            </button>
            {counter}
            <button
                type="button"
                style={{
                    marginLeft: '1rem',
                }}
                disabled={counter >= 5}
                onClick={increment}
            >
                +
            </button>
        </div>
    )
}
