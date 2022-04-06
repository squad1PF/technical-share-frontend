import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SingIn';
import Users from '../pages/Users';

const AuthRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/cadastro' element={<SignUp />}/>
            <Route path='/entrar' element={<SignIn />}/>
        </Routes>
    )
}

export default AuthRoutes;