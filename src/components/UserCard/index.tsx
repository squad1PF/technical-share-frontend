import React from "react";
import { FiBriefcase, FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { UserData } from "../../interfaces/user";
import { UserCardWrapper } from "./styles";

type UserCardProps = {
    user: UserData;
    elementKey: string;
}

const UserCard: React.FC<UserCardProps> = ({ user, elementKey }) => {
    const { id, name, email, role, skills } = user;

    const techs = skills.map((skill, index) => skill.tech)
    const [username, server] = email.split("@");
    const navigate = useNavigate();

    return (
        <UserCardWrapper onClick={() => navigate(`/profile/${id}`)}>
            <div id="avatar-wrapper">
                <div id="avatar">?</div>
            </div>
            <div id="info-wrapper">
                <h4>{ name }</h4>
                <div>
                    <span><FiBriefcase /></span>
                    <p>{ role.name }, { role.seniority }</p>
                </div>
                <div>
                    <span><FiMail /></span>
                    <p id="email-username">{ username }@</p>
                    <p id="email-server">{ server }</p>
                </div>

                <p id="skills">
                    { techs.join(", ") }
                </p>
            </div>
        </UserCardWrapper>
    )
}

export default UserCard;