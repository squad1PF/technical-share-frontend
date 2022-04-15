import { AxiosResponse } from "axios";

import { api } from "../providers";
import { MentorshipData } from "../interfaces/mentorships";

export const getMentorshipsByMentor = async (id: string, callback: (value: MentorshipData[]) => void) => {
    const response: AxiosResponse<MentorshipData[]> = await api.get(`/mentorships?id_mentor=${id}`);

    callback(response.data);
}

export const getMentorshipsByMentored = async (id: string, callback: (value: MentorshipData[]) => void) => {
    const response: AxiosResponse<MentorshipData[]> = await api.get(`/mentorships?id_mentored=${id}`);

    callback(response.data);
}