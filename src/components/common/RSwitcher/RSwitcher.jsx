import cn from 'classnames'
import styles from './r-switcher.module.css'

export const RSwitcher = ({ className, checked, onChange }) => {
    return (
        <button
            type="button"
            className={cn(styles['r-switcher'], className, {
                [styles['r-switcher--light']]: checked,
            })}
            onClick={onChange}
        >
            <span className={styles['r-switcher__track']} />
            <span className={styles['r-switcher__thumb']} />
        </button>
    )
}
