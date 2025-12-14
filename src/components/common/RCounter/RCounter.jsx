import styles from './r-counter.module.css'
import { RCounterButton } from './RCounterButton.jsx'

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
            <RCounterButton disabled={value <= minValue} onClick={decrement}>
                -
            </RCounterButton>
            <span className={styles['r-counter__value']}>{value}</span>

            <RCounterButton disabled={value >= maxValue} onClick={increment}>
                +
            </RCounterButton>
        </div>
    )
}
