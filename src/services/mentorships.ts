import { AxiosResponse } from "axios";

import { api } from "../providers";
import { MentorshipData, NewMentorshipData } from "../interfaces/mentorships";

export const getMentorships = async (id: string, callback: (value: MentorshipData[]) => void) => {
    const response: AxiosResponse<MentorshipData[]> = await api.get(`/mentorships`);

    callback(response.data);
}

export const createMentorship = async(data: NewMentorshipData, callback: (value: MentorshipData) => void) => {
    const response: AxiosResponse<MentorshipData> = await api.post("/mentorships", data);

    callback(response.data);
}