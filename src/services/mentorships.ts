import { AxiosResponse } from "axios";

import { api } from "../providers";
import { MentorshipData, NewMentorshipData } from "../interfaces/mentorships";

export const getMentorshipsByMentor = async (id: string, callback: (value: MentorshipData[]) => void) => {
    const response: AxiosResponse<MentorshipData[]> = await api.get(`/mentorships?id_mentor=${id}`);

    callback(response.data);
}

export const getMentorshipsByMentored = async (id: string, callback: (value: MentorshipData[]) => void) => {
    const response: AxiosResponse<MentorshipData[]> = await api.get(`/mentorships?id_mentored=${id}`);

    callback(response.data);
}

export const createMentorship = async(data: NewMentorshipData, callback: (value: MentorshipData) => void) => {
    const response: AxiosResponse<MentorshipData> = await api.post("/mentorships", data);

    callback(response.data);
}