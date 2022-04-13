import { api } from "../providers";
import { AxiosResponse } from "axios";

import { UserData } from "../interfaces/user";

const users: UserData[] = [
    {
        id: "KASkdJ182",
        name: "Rian Aquino",
        email: "rian.aquino@gmail.com",
        role: {
            name: "Developer",
            seniority: "Trainee"
        },
        skills: [
            {
                tech: "Javascript",
                level: 1
            }
        ]
    },
    {
        id: "K2SkdJ182",
        name: "Eloisa de Oliveira",
        email: "eloisaoliveira@outlook.com",
        role: {
            name: "Developer",
            seniority: "Pleno"
        },
        skills: [
            {
                tech: "Javascript",
                level: 4
            },
            {
                tech: "HTML",
                level: 3,
            }
        ]
    },
    {
        id: "K123dJ182",
        name: "Alexsandro Silva",
        email: "alexsilva@outlook.com",
        role: {
            name: "Developer",
            seniority: "Senior"
        },
        skills: [
            {
                tech: "Javascript",
                level: 2
            },
            {
                tech: "Java",
                level: 5
            },
        ]
    },
    {
        id: "KASasdfS182",
        name: "Saulo Quaresma",
        email: "sauloquaresma@outlook.com",
        role: {
            name: "Developer",
            seniority: "Pleno"
        },
        skills: [
            {
                tech: "Javascript",
                level: 3
            },
            {
                tech: "NodeJS",
                level: 4
            },
            {
                tech: "CSS",
                level: 3
            },
        ]
    },
    {
        id: "KAAWEdJ182",
        name: "Fernanda Caccese",
        email: "fercaccese@outlook.com",
        role: {
            name: "UX Designer",
            seniority: "Pleno"
        },
        skills: [
            {
                tech: "Research",
                level: 2
            },
            {
                tech: "UI",
                level: 4
            },
            {
                tech: "Test",
                level: 3
            },
        ]
    },
]

const getUsers = async (callback: (value: UserData[]) => void) => {
    /* const res: AxiosResponse<UserData[]> = await api.get("/users");
    if (res.status !== 200) throw res.status; */

    const res: { data: UserData[] } = {
        data: users
    }

    callback(res.data);
}

const getUser = async (id: string, callback: (value: UserData | undefined) => void) => {
    const res: { data: UserData | undefined } = {
        data: users.find(user => user.id === id)
    }

    
    callback(res.data);
}

export {
    getUsers,
    getUser,
}