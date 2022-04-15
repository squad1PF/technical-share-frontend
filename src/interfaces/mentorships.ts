export interface MentorshipData {
    id: string;
    id_mentor: string,
    id_mentored: string,
    subject: string,
    start_date: string,
    end_date: string
}

export interface NewMentorshipData {
    id_mentor: string,
    id_mentored: string,
    subject: string,
    start_date: string,
    end_date: string
}

export interface MentorshipDataForm {
    subject: string,
    start_date: Date,
    end_date: Date
}