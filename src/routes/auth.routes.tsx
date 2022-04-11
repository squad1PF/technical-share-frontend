import React from 'react';
import { Route, RouteObject, Routes, useRoutes } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SingIn';
import Users from '../pages/Find';

const AuthRoutes: RouteObject[] = [
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/find",
        element: <Users />
    },
]

export default AuthRoutes;