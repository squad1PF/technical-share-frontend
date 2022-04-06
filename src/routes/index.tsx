import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.routes';

import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <AuthRoutes />
            <AppRoutes />
        </BrowserRouter>
    )
}

export default Routes;