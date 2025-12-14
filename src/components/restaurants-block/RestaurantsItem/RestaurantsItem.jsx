import { RestaurantsItemMenu } from '@/components/restaurants-block/RestaurantsItemMenu/RestaurantsItemMenu.jsx'
import { RestaurantsItemFeedback } from '@/components/restaurants-block/RestaurantsItemFeedback/RestaurantsItemFeedback.jsx'
import { RReviewForm } from '@/components/common/RReviewForm/RReviewForm.jsx'
import styles from './restaurants-item.module.css'

export const RestaurantsItem = ({ restaurant }) => {
    const { id, name, menu, reviews } = restaurant

    return (
        <section className={styles['restaurants-item']}>
            <header className={styles['restaurants-item__header']}>
                <h2 className={styles['restaurants-item__title']}>{name}</h2>
            </header>

            <div className={styles['restaurants-item__grid']}>
                <div>
                    {menu.length > 0 ? (
                        <RestaurantsItemMenu title="Menu" menu={menu} />
                    ) : (
                        <p className={styles['restaurants-item__empty']}>
                            No menu
                        </p>
                    )}
                </div>

                <div>
                    {reviews.length > 0 ? (
                        <RestaurantsItemFeedback
                            title="Feedback"
                            reviews={reviews}
                        />
                    ) : (
                        <p className={styles['restaurants-item__empty']}>
                            No feedback
                        </p>
                    )}
                    {/* key используется для перерисовки формы при смене таба */}
                    <RReviewForm key={id} />
                </div>
            </div>
        </section>
    )
}
