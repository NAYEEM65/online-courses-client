import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import Reset from '../../pages/auth/Reset';
import Home from '../../components/Home/Home';
import Courses from '../../components/Courses/Courses';
import About from '../../components/About/About';
import Blog from '../../components/Blog/Blog';
import Faq from '../../components/Faq/Faq';
import Contact from '../../components/Contact/Contact';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
export const routes = createBrowserRouter([
    {
        path: '*',
        element: <ErrorPage />,
    },
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/courses',
                element: <Courses />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/faq',
                element: <Faq />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/reset',
                element: <Reset />,
            },
        ],
    },
]);
