import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './layout/Home.tsx'
import LoginPage from './pages/Auth/login.tsx'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        
    },
    {
      path: '/login',
      element: <LoginPage/>
    }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
      
  </React.StrictMode>,
)
