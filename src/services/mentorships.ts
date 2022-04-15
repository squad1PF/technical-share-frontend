import { AxiosResponse } from "axios";

import { api } from "../providers";
import { MentorshipData } from "../interfaces/mentorships";

export const getMentorships = async (id: string, callback: (value: MentorshipData[]) => void) => {
    const response: AxiosResponse<MentorshipData[]> = await api.get(`/mentorships`);

    callback(response.data);
}