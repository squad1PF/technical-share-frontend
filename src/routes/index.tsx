import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import Menu from '../components/Menu';

import Landing from '../pages/Landing';
import NoMatch from '../pages/NoMatch';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const routesElements = useRoutes([
        { path: "/", element: <Landing /> },
        { path: "*", element: <NoMatch /> },
        ...AuthRoutes,
        ...AppRoutes,
    ]);

    return (
        <>
            <Menu />
            
            {
                routesElements
            }
        </>
    )
}

export default Routes;