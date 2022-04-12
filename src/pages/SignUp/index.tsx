import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Main } from './styles';

type UserDataForm = {
    name: string,
    occupationArea: string,
    seniority: string,
    email: string,
    password: string
}

const validationUserData = yup.object().shape({
    name: yup.string().required("O nome completo é obrigatório"),
    occupationArea: yup.string().required("A área de atuação é obrigatória"),
    seniority: yup.string().required("A senioridade é obrigatória"),
    email: yup.string().required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória")
})

/*const createUserURL = 'https://api-technical-share.herokuapp.com/cadastro'*/

const SignUp: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserDataForm>({
        resolver: yupResolver(validationUserData)
    })

    const addUser = (userData: UserDataForm) => (
        console.log(userData)
    )

    return (
        <Main>
            <section id="view">
                <h2>Cadastro</h2>
                <div id="form-container">
                    <form onSubmit={handleSubmit(addUser)}>
                        <label>Nome completo:</label>
                        <input type="text" id="name" {...register("name")} autoFocus />
                        <p>{errors.name?.message}</p>

                        <label>Área de atuação:</label>
                        <select id="occupationArea" {...register("occupationArea")} defaultValue={'default'}>
                            <option value='default' disabled hidden>Escolha:</option>
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Fullstack</option>
                            <option>UX/UI</option>
                        </select>
                        <p>{errors.occupationArea?.message}</p>

                        <label>Senioridade:</label>
                        <select id="seniority" {...register("seniority")} defaultValue={'default'}>
                            <option value='default' hidden>Escolha:</option>
                            <option>Júnior</option>
                            <option>Pleno</option>
                            <option>Sênior</option>
                        </select>
                        <p>{errors.seniority?.message}</p>

                        <label>Email:</label>
                        <input type="email" id="email" {...register("email")} />
                        <p>{errors.email?.message}</p>

                        <label>Password:</label>
                        <input type="password" id="password" {...register("password", { min: 6 })} />
                        <p>{errors.password?.message}</p>

                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </section>
        </Main>
    )
}

export default SignUp;