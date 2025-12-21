import { DefaultLayout } from '@/layouts/default/default.jsx'
import { RScrollProgress } from '@/components/common/RScrollProgress/RScrollProgress.jsx'
import { RestaurantsBlock } from '@/components/restaurants-block/RestaurantsBlock/RestaurantsBlock.jsx'

export const RestaurantsPage = () => {
    return (
        <DefaultLayout title="Restaurants">
            <RScrollProgress />
            <RestaurantsBlock />
        </DefaultLayout>
    )
}
