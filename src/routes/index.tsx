import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from '../pages/Landing';
import Users from '../pages/Users';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/users' element={<Users />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;