import { AxiosResponse } from "axios";

import { api } from "../providers";
import { UserData, NewUserData } from "../interfaces/user";

export async function signIn(email: string): Promise<UserData> {
    const res: AxiosResponse<UserData[]> = await api.get(`/users?email=${email}`);

    if(!res.data) throw new Error("Conta não existente");

    return res.data[0];
}

export async function signUp(values: NewUserData) {
    const res: AxiosResponse<UserData> = await api.post(`/users`, values);

    return res.data;
}