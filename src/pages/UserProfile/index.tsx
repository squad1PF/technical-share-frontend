import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar";
import AuthContext from "../../contexts/auth";
import { MentorshipData } from "../../interfaces/mentorships";

import { getMentorships } from "../../services/mentorships";
import { getUser } from "../../services/users";
import { ProfilePage } from "./styles";
import { ProfileContainer } from "./styles";

const UserProfile: React.FC = () => {
  const { user } = useContext(AuthContext)
  const [mentorships, setMentorships] = useState<MentorshipData[] | undefined>(undefined)
  const { id } = useParams<"id">();

  useEffect(() => {
    if (id) {
      getMentorships(id, (value) => {
        if (id === user?.id) {
          setMentorships(value)
        }
      })
    }
  }, [id])

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
            <h1>{user?.name}</h1>
            <p>{user?.role.name}, {user?.role.seniority}</p>
          </div>

          <h4 className="label">Contatos:</h4>
          <div id="contact-wrapper">
            <p>{user?.email}</p>
          </div>

          <h4 className="label">Habilidades:</h4>
          <div id="skills-container">
            <ul>
              {user?.skills.map((skill, index) => {
                let levelStr = "";
                for (let i = 0; i < skill.level; i++) {
                  levelStr += "🍊"
                }

                return (
                  <li key={index}>
                    <p>{skill.tech}</p>
                    <p>{levelStr}</p>
                  </li>
                )
              })}
            </ul>
          </div>

          <h4 className="label">Mentorias Agendadas</h4>
            <div id="mentorship-container">
              <ul>
                {mentorships?.map((mentorship, index) => {
                  return (
                    <li key={index}>
                      <p>Mentor: {mentorship.id_mentor}</p>
                      <p>Início: {mentorship.start_time}</p>
                      <p>Final: {mentorship.end_time}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
      </ProfileContainer>

    </ProfilePage>
  )
}

export default UserProfile;