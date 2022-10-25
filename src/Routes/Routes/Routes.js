import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import Reset from '../../pages/auth/Reset';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/login',
                element: <Login />,
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
