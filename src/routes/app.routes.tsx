import { RouteObject } from 'react-router-dom';

import Users from '../pages/Find';
import Profile from '../pages/Profile';

const AppRoutes: RouteObject[] = [
    {
        path: "/find",
        element: <Users />
    },
    {
        path: "/profile/:id",
        element: <Profile />
    },
]

export default AppRoutes;