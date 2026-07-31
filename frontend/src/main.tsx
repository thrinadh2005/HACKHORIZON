import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import App from './App'
import './index.css'
import { initPWA } from './registerSW'

// Initialize PWA features
initPWA().then((pwaStatus) => {
  console.log('PWA Status:', pwaStatus)
}).catch((error) => {
  console.error('PWA initialization failed:', error)
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

