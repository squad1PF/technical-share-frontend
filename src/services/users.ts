import { api } from "../providers";
import { AxiosResponse } from "axios";

import { UserData } from "../interfaces/user";

const getUsers = async (callback: (value: UserData[]) => void) => {
    /* const res: AxiosResponse<UserData[]> = await api.get("/users");
    if (res.status !== 200) throw res.status; */

    const res: { data: UserData[] } = {
        data: [
            {
                name: "Rian Aquino",
                email: "rian.aquino@gmail.com",
                role: {
                    name: "Developer",
                    seniority: "Trainee"
                },
                skills: [
                    {
                        tech: "Javascript",
                        level: "Básico"
                    }
                ]
            },
            {
                name: "Eloisa de Oliveira",
                email: "eloisaoliveira@outlook.com",
                role: {
                    name: "Developer",
                    seniority: "Pleno"
                },
                skills: [
                    {
                        tech: "Javascript",
                        level: "Avançado"
                    },
                    {
                        tech: "HTML",
                        level: "Avançado",
                    }
                ]
            },
            {
                name: "Alexsandro Silva",
                email: "alexsilva@outlook.com",
                role: {
                    name: "Developer",
                    seniority: "Senior"
                },
                skills: [
                    {
                        tech: "Javascript",
                        level: "Básico"
                    },
                    {
                        tech: "Java",
                        level: "Avançado"
                    },
                ]
            },
            {
                name: "Saulo Quaresma",
                email: "sauloquaresma@outlook.com",
                role: {
                    name: "Developer",
                    seniority: "Pleno"
                },
                skills: [
                    {
                        tech: "Javascript",
                        level: "Intermediário"
                    },
                    {
                        tech: "NodeJS",
                        level: "Avançado"
                    },
                    {
                        tech: "CSS",
                        level: "Intermediário"
                    },
                ]
            },
            {
                name: "Fernanda Caccese",
                email: "fercaccese@outlook.com",
                role: {
                    name: "UX Designer",
                    seniority: "Pleno"
                },
                skills: [
                    {
                        tech: "Research",
                        level: "Básico"
                    },
                    {
                        tech: "UI",
                        level: "Avançado"
                    },
                ]
            },
        ]
    }

    callback(res.data);
}

export {
    getUsers,
}