import { createRoot } from 'react-dom/client'
import { RestaurantsList } from '@/components/restaurants-list/RestaurantsList'
import { DefaultLayout } from '@/layouts/default'

const root = document.getElementById('root')
const reactRoot = createRoot(root)

reactRoot.render(
    <DefaultLayout title="Restaurnats">
        <RestaurantsList />
    </DefaultLayout>
)
