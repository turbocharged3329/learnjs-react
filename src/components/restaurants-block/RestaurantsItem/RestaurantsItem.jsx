import { RestaurantsItemMenu } from '@/components/restaurants-block/RestaurantsItemMenu/RestaurantsItemMenu.jsx'
import { RestaurantsItemFeedback } from '@/components/restaurants-block/RestaurantsItemFeedback/RestaurantsItemFeedback.jsx'
import { RReviewForm } from '@/components/common/RReviewForm/RReviewForm.jsx'
import { useContext } from 'react'
import { UserContext } from '@/components/user-context/user-context.jsx'
import styles from './restaurants-item.module.css'

export const RestaurantsItem = ({ restaurant }) => {
    const { id, name, menu, reviews } = restaurant
    const { user } = useContext(UserContext)

    return (
        <section className={styles.root}>
            <header className={styles.header}>
                <h2 className={styles.title}>{name}</h2>
            </header>

            <div className={styles.grid}>
                <div>
                    {menu.length > 0 ? (
                        <RestaurantsItemMenu title="Menu" menu={menu} />
                    ) : (
                        <p className={styles.empty}>No menu</p>
                    )}
                </div>

                <div>
                    {reviews.length > 0 ? (
                        <RestaurantsItemFeedback
                            title="Feedback"
                            reviews={reviews}
                        />
                    ) : (
                        <p className={styles.empty}>No feedback</p>
                    )}
                    {/* key используется для перерисовки формы при смене таба */}
                    {user ? <RReviewForm key={id} /> : null}
                </div>
            </div>
        </section>
    )
}
