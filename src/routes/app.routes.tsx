import { RouteObject } from 'react-router-dom';

import Users from '../pages/Find';
import Profile from '../pages/Profile';
import ToSchedule from '../pages/ToSchedule';

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
        path: "/mentorships/new",
        element: <ToSchedule />
    },
]

export default AppRoutes;