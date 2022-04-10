export interface UserData {
    name: string;
    email: string;
    role: {
        name: string;
        seniority: string;
    }
    skills: {
        tech: string;
        level: string;
    }[]
}