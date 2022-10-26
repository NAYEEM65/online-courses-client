import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import Reset from '../../pages/auth/Reset';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Blog from '../../components/Blog/Blog';
import ErrorPage from '../../components/Common/ErrorPage/ErrorPage';
import Faq from '../../components/Common/Faq/Faq';
import Contact from '../../components/Common/Contact/Contact';
import Courses from '../../pages/Courses/Courses';
import Course from '../../pages/Courses/Course';

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
                loader: () => fetch(`http://localhost:5000/courses`),
            },
            {
                path: '/course/:id',
                element: <Course />,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
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
