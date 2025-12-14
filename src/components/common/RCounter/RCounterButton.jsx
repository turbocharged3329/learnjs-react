import styles from './r-counter.module.css'

export const RCounterButton = ({ disabled, onClick, children }) => {
    return (
        <button
            type="button"
            className={styles['r-counter__button']}
            disabled={disabled}
            onClick={onClick}
        >
            <span className={styles['r-counter__button-icon']}>{children}</span>
        </button>
    )
}
