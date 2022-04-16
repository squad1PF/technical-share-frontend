import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserData, NewUserData } from '../interfaces/user';
import * as auth from '../services/auth';
import * as users from '../services/users';

type AuthContextData = {
    signed: boolean;
    user: UserData | null;
    
    signIn(email: string): Promise<void>;
    signUp(values: NewUserData): Promise<void>;
    addSkill(values: { tech: string, level: number}): void;

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
        if(!response.id) throw new Error("E-mail não encontrado")

        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));

        navigate("/profile");
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

    function addSkill(value: { tech: string, level: number}) {
        
        setUser(prev => {
            const { id, email, name, role, skills } = prev as UserData;
            const data = { id, email, name, role, skills: [ ...skills, value ] }
            
            users.addSkill(user?.id as string, data.skills)
            localStorage.setItem("user", JSON.stringify(data));
            return (data)
        })
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, addSkill, signIn, signUp, signOut }}>
          { children }
        </AuthContext.Provider>
    )
}