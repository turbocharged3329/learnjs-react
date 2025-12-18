import cn from 'classnames'
import styles from './r-switcher.module.css'

export const RSwitcher = ({ className, checked, onChange }) => {
    return (
        <button
            type="button"
            className={cn(styles.root, className, {
                [styles.rSwitcherLight]: checked,
            })}
            onClick={onChange}
        >
            <span className={styles.rSwitcherTrack} />
            <span className={styles.rSwitcherThumb} />
        </button>
    )
}
