import { createRoot } from 'react-dom/client'
import { RestaurantsBlock } from '@/components/restaurants-block/RestaurantsBlock.jsx'
import { DefaultLayout } from '@/layouts/default'
import { RScrollProgress } from '@/components/common/RScrollProgress/RScrollProgress.jsx'

const root = document.getElementById('root')
const reactRoot = createRoot(root)

reactRoot.render(
    <DefaultLayout title="Restaurnats">
        <RScrollProgress />
        <RestaurantsBlock />
    </DefaultLayout>
)
