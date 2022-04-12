import { RouteObject } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SingIn';


const AuthRoutes: RouteObject[] = [
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    
]

export default AuthRoutes;