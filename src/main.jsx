import '@/assets/css/global.css'
import { createRoot } from 'react-dom/client'
import { RestaurantsBlock } from '@/components/restaurants-block/RestaurantsBlock/RestaurantsBlock.jsx'
import { DefaultLayout } from '@/layouts/default/default.jsx'
import { RScrollProgress } from '@/components/common/RScrollProgress/RScrollProgress.jsx'

const root = document.getElementById('root')
const reactRoot = createRoot(root)

reactRoot.render(
    <DefaultLayout title="Restaurants">
        <RScrollProgress />
        <RestaurantsBlock />
    </DefaultLayout>
)
