import { RouteObject } from 'react-router-dom';

import Users from '../pages/Find';
import Profile from '../pages/Profile';
import UserProfile from '../pages/UserProfile';
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
        path: "/profile",
        element: <UserProfile/>
    },
    {
        path: "/mentorships/new",
        element: <ToSchedule />
    },
]

export default AppRoutes;