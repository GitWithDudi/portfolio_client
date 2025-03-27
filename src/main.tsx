import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
import { Projects } from './Pages/Projects/Projects'
import { Recommendations } from './Pages/Recommendations/Recommendations'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {App} from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App מכיל את הניווט + Outlet
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '/recommendations', element: <Recommendations /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);