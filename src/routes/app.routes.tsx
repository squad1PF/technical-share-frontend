import React from 'react';
import { Route, RouteObject, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const AppRoutes: RouteObject[] = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    }
]

export default AppRoutes;