import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Projects } from './Pages/Projects/Projects';
import { Recommendations } from './Pages/Recommendations/Recommendations';
import { AddRecommendation } from './Pages/AddRecommendation/AddRecommendation.tsx';
import { ProjectDetails } from './Pages/Project_details/Project_details.tsx';
import { Login } from './Pages/Login/Login.tsx';
import { AddProject } from './Pages/AddProject/AddProject.tsx';
import { AdminPanel } from './Pages/AdminPanel/AdminPanel.tsx';
import { Contact } from './Pages/Contact/Contact.tsx';
import { Layout } from './Components/Layout_area/Layout/Layout.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './securityPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '/recommendations', element: <Recommendations /> },
      {
        path: '/admin-panel',
        element: (
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        ),
      },
      {
        path: '/add-project',
        element: (
          <ProtectedRoute>
            <AddProject />
          </ProtectedRoute>
        ),
      },
      {
        path: '/add-recommendation',
        element: (
          <ProtectedRoute>
            <AddRecommendation />
          </ProtectedRoute>
        ),
      },
      { path: '/login', element: <Login /> },
      { path: '/contact', element: <Contact /> },
      { path: '/project/:id', element: <ProjectDetails /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
