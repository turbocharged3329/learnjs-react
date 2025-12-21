import styles from './r-counter.module.css'

export const RCounterButton = ({ disabled, onClick, children }) => {
    return (
        <button
            type="button"
            className={styles.button}
            disabled={disabled}
            onClick={onClick}
        >
            <span className={styles.buttonIcon}>{children}</span>
        </button>
    )
}
