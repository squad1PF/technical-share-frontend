import { RouteObject } from 'react-router-dom';

import Users from '../pages/Find';

const AppRoutes: RouteObject[] = [
    {
        path: "/find",
        element: <Users />
    },
]

export default AppRoutes;