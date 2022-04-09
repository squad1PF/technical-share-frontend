import { api } from "../providers";
import { AxiosResponse } from "axios";

import { UserData } from "../interfaces/user";

const getUsers = async (callback: (value: UserData[]) => void) => {
    /* const res: AxiosResponse<UserData[]> = await api.get("/users");
    if (res.status !== 200) throw res.status; */

    const res: { data: UserData[] } = {
        data: [
            {
                name: "Rian",
                email: "rian.aquino@outlook.com",
                role: {
                    name: "Developer",
                    seniority: "Junior"
                },
                skills: [
                    {
                        tech: "Javascript",
                        level: "Básico"
                    }
                ]
            }
        ]
    }

    callback(res.data);
}

export {
    getUsers,
}