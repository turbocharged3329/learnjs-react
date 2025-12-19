import styles from './r-counter.module.css'
import { RCounterButton } from './RCounterButton.jsx'

export const RCounter = ({
    value,
    onIncrease,
    onDecrease,
    minValue = 0,
    maxValue = 5,
}) => {
    function increment() {
        if (value === maxValue) {
            return
        }

        onIncrease()
    }

    function decrement() {
        if (value === minValue) {
            return
        }

        onDecrease()
    }

    return (
        <div className={styles.rCounter}>
            <RCounterButton disabled={value <= minValue} onClick={decrement}>
                -
            </RCounterButton>
            <span className={styles.value}>{value}</span>

            <RCounterButton disabled={value >= maxValue} onClick={increment}>
                +
            </RCounterButton>
        </div>
    )
}
