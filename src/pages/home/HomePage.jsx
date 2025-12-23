import { Link } from 'react-router'
import styles from './home-page.module.css'

export const HomePage = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Restaurants</h1>
            <Link to="/restaurants">Go to Restaurants</Link>
        </div>
    )
}
