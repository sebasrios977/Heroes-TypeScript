import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { appRouter } from './router/AppRouter'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './auth/context/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  </React.StrictMode>,
)
