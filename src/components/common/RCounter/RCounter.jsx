import styles from './r-counter.module.css'

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
        <div className={styles['r-counter']}>
            <button
                type="button"
                className={styles['r-counter__button']}
                disabled={value <= minValue}
                onClick={decrement}
            >
                -
            </button>
            <span className={styles['r-counter__value']}>{value}</span>
            <button
                type="button"
                className={styles['r-counter__button']}
                disabled={value >= maxValue}
                onClick={increment}
            >
                +
            </button>
        </div>
    )
}
