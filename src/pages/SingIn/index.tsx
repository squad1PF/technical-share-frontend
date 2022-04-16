import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';
import { SignInPage } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type LoginFormData = {
    email: string
}

const validationFormData = yup.object().shape({
    email: yup.string().required("O email é obrigatório")
})

const SignIn: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(validationFormData)
    })    
    const { signIn } = useContext(AuthContext);

    const userLogin = (loginFormData: LoginFormData) => {
       signIn(loginFormData.email)
    }

    return (
        <SignInPage>
            <h2>Login</h2>
            <section>
                <div id="form-container">
                    <form onSubmit={handleSubmit(userLogin)}>

                        <label>Email:</label>
                        <input type="email" id="email" {...register("email")} />
                        <p>{errors.email?.message}</p>

                        <button type="submit">Logar</button>
                    </form>
                </div>
            </section>
        </SignInPage>
    )
}

export default SignIn;