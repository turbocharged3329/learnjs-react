export const RCounter = ({ value, onChange, minValue = 0, maxValue = 5 }) => {
    function increment() {
        if (value === maxValue) {
            return
        }

        onChange(value + 1)
    }

    function decrement() {
        if (value === minValue) {
            return
        }

        onChange(value - 1)
    }

    return (
        <div>
            <button
                type="button"
                style={{
                    marginRight: '1rem',
                }}
                disabled={value <= minValue}
                onClick={decrement}
            >
                -
            </button>
            {value}
            <button
                type="button"
                style={{
                    marginLeft: '1rem',
                }}
                disabled={value >= maxValue}
                onClick={increment}
            >
                +
            </button>
        </div>
    )
}
