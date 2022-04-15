import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserData, NewUserData } from '../interfaces/user';
import * as auth from '../services/auth';

type AuthContextData = {
    signed: boolean;
    user: UserData | null;
    
    signIn(email: string): Promise<void>;
    signUp(values: NewUserData): Promise<void>;

    signOut(): void;
}

const AuthContext = createContext({} as AuthContextData);
export default AuthContext;

export const AuthProvider: React.FC = ({ children }) => {
    const storagedUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
    const [user, setUser] = useState<UserData | null>(storagedUser);
    const navigate = useNavigate();

    // Auth Functions
    async function signIn(email: string) {
        const response = await auth.signIn(email);
        console.log(response);

        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/profile")
    }

    async function signUp(values: NewUserData) {
        const response = await auth.signUp(values);

        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));

        navigate("/find");
    }
    
    function signOut(callback: void) {
        navigate("/");
        setUser(null);
        
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, signUp, signOut }}>
          { children }
        </AuthContext.Provider>
    )
}