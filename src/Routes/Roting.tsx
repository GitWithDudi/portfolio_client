import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { About } from '../Pages/About/About';
import { Projects } from '../Pages/Projects/Projects';
import { RecommendationForm } from '../Pages/AddRecommendation/AddRecommendation';
import { Recommendations } from '../Pages/Recommendations/Recommendations';

export const BrowserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/recommendations',
                element: <Recommendations />
            },
            {
                path: '/add-recommendation',
                element: <RecommendationForm />
            } 
        ]
    }
]);

