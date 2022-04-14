import { api } from "../providers";
import { AxiosResponse } from "axios";

import { UserData } from "../interfaces/user";

const getUsers = async (callback: (value: UserData[]) => void) => {
    const res: AxiosResponse<UserData[]> = await api.get("/users");
    if (res.status !== 200) throw res.status;

    callback(res.data);
}

const getUser = async (id: string, callback: (value: UserData | undefined) => void) => {
    const res: AxiosResponse<UserData> = await api.get(`/users/${id}`);
    
    callback(res.data);
}

export {
    getUsers,
    getUser,
}