import styles from './restaurants-item.module.css'
import { NavLink, Outlet } from 'react-router'
import cn from 'classnames'

const TABS = [
    {
        label: 'Menu',
        value: 'menu',
    },
    {
        label: 'Feedback',
        value: 'feedback',
    },
]

export const RestaurantsItem = ({ restaurant }) => {
    const { id, name, menu, reviews } = restaurant

    return (
        <section className={styles.root}>
            <header className={styles.header}>
                <h2 className={styles.title}>{name}</h2>
            </header>

            <section>
                {TABS.map((tab) => (
                    <NavLink
                        key={tab.value}
                        className={({ isActive }) =>
                            cn(styles.tabItem, isActive && styles.active)
                        }
                        to={`/restaurants/${id}/${tab.value}`}
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </section>

            <div>
                <Outlet context={{ menu, reviews }} />
            </div>
        </section>
    )
}
