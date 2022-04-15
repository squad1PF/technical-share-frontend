import React, { useEffect, useState } from "react";
import { FiCalendar, FiMessageSquare } from "react-icons/fi";

import { MentorshipData } from "../../interfaces/mentorships";
import { UserData } from "../../interfaces/user";
import { getUser } from "../../services/users";
import { MentorshipCardWrapper } from "./style";

type MentorshipCardProps = {
    mentorship: MentorshipData;
}

const MentorshipCard: React.FC<MentorshipCardProps> = ({ mentorship }) => {
    const [mentor, setMentor] = useState<UserData | null>(null);
    const [mentored, setMentored] = useState<UserData | null>(null);

    useEffect(() => {
        if(mentorship) {
            getUser(mentorship.id_mentor, (value) => {
                setMentor(value || null)
            })
    
            getUser(mentorship.id_mentored, (value) => {
                setMentored(value || null)
            })
        }
    }, [])

    function getDateStr(date: Date) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth()).padStart(2, "0");;
        const year = String(date.getFullYear());

        const hours = String(date.getHours()).padStart(2, "0");;
        const minutes = String(date.getMinutes()).padStart(2, "0");;

        return `${day}/${month}/${year} ${hours}:${minutes}`
    }

    return (
        <MentorshipCardWrapper>
            <h2>Mentor: { mentor?.name }</h2>
            <p>Mentorado: { mentored?.name }</p>

            <div id="info-container">
                <div className="info-item">
                    <FiCalendar />
                    <p>
                        { getDateStr(new Date(mentorship.start_date)) }, até { getDateStr(new Date(mentorship.end_date)) }
                    </p>
                </div>
                <div className="info-item">
                    <FiMessageSquare />
                    <p>
                        { mentorship.subject }
                    </p>
                </div>
            </div>
        </MentorshipCardWrapper>
    )
}

export default MentorshipCard;