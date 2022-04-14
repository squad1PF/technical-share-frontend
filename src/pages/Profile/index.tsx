import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { UserData } from "../../interfaces/user";

import { getUser } from "../../services/users";
import { ProfileContainer, ProfilePage } from "./styles";

const Profile: React.FC = () => {
    const { id } = useParams<"id">();
    const [user, setUser] = useState<UserData | undefined>(undefined);

    useEffect(() => {
        if(id) {
            getUser(id, (value) => {
                setUser(value)
            })
        }
    }, []);

    return (
        <ProfilePage>
            <ProfileContainer>
                <div id="profile-container">
                    <div>
                        <div id="avatar-container">
                        <Avatar />
                    </div>
                    </div>

                    <div id="info-wrapper">
                        <h1>{ user?.name }</h1>
                        <p>{ user?.role.name }, { user?.role.seniority }</p>

                    </div>

                </div>
                
                <h4 className="label">Contatos:</h4>
                <div id="contact-wrapper">
                    <p>{ user?.email }</p>
                </div>

                <h4 className="label">Habilidades:</h4>
                <div id="skills-container">
                    <ul>
                        { user?.skills.map((skill, index) => {
                            let levelStr = "";
                            for(let i = 0; i < skill.level; i++) {
                                levelStr += "🍊"
                            }

                            return (
                                <li key={index}>
                                    <p>{ skill.tech }</p>
                                    <p>{ levelStr }</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <h4 className="label">Horários disponíveis:</h4>
            </ProfileContainer>
        </ProfilePage>
    )
}

export default Profile;