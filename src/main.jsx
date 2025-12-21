import '@/assets/css/global.css'
import { createRoot } from 'react-dom/client'
import { App } from '@/components/app/app.jsx'

const root = document.getElementById('root')
const reactRoot = createRoot(root)

reactRoot.render(<App />)
