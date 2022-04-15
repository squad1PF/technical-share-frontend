import { RouteObject } from 'react-router-dom';

import Users from '../pages/Find';
import Profile from '../pages/Profile';
import UserProfile from '../pages/UserProfile';

const AppRoutes: RouteObject[] = [
    {
        path: "/find",
        element: <Users />
    },
    {
        path: "/profile/:id",
        element: <Profile />
    },
    {
        path: "/user/profile/:id",
        element: <UserProfile/>
    }
]

export default AppRoutes;