import React from 'react';
import { Link, useRoutes } from 'react-router-dom';

import Landing from '../pages/Landing';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const routesElements = useRoutes([
        { path: "/", element: <Landing /> },
        ...AuthRoutes,
        ...AppRoutes,
    ]);

    return (
        <>
            <h1>Rotas Gerais</h1>

            <Link to="/">Home</Link><br/>
            <Link to="/users">Users</Link><br/>
            <Link to="/dashboard">Dashboard</Link><br/>
            <Link to="/signin">Sign In</Link><br/>
            <Link to="/signup">Sign Up</Link><br/>

            { routesElements }
        </>
    )
}

export default Routes;