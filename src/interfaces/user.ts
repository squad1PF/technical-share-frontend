export interface UserData {
    id: string;
    name: string;
    email: string;
    role: {
        name: string;
        seniority: string;
    }
    skills: {
        tech: string;
        level: number;
    }[]
}
export interface NewUserData {
    name: string;
    email: string;
    role: {
        name: string;
        seniority: string;
    }
    skills: {
        tech: string;
        level: number;
    }[]
}