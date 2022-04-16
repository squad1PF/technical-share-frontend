import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "../../components/Avatar";
import MentorshipCard from "../../components/MentorshipCard";
import AuthContext from "../../contexts/auth";
import { MentorshipData } from "../../interfaces/mentorships";

import { getMentorships } from "../../services/mentorships";
import { getUser } from "../../services/users";
import { PrimaryButton } from "../../styles/buttons";
import { ProfilePage } from "./styles";
import { ProfileContainer } from "./styles";

const UserProfile: React.FC = () => {
  const { user, addSkill, signOut } = useContext(AuthContext);
  const [mentorships, setMentorships] = useState<MentorshipData[] | undefined>(undefined);
  const navigate = useNavigate();

  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState(1);

  useEffect(() => {
    getMentorships(user?.id as string, (value) => {
      setMentorships(value)
    })
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
            <h1>{user?.name}</h1>
            <p>{user?.role.name}, {user?.role.seniority}</p>
          </div>

          <PrimaryButton onClick={() => signOut()}>Deslogar</PrimaryButton>
          
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
              <li>
                <input
                  type="text"
                  placeholder="Habilidade/Tecnologia"
                  value={skill}
                  onInput={(e) => setSkill(e.currentTarget.value)}
                  style={
                    { flex: .9 }
                  }
                />
                
                <input
                  type="number"
                  placeholder="Nível"
                  min={1}
                  max={5}
                  value={level}
                  onInput={(e) => setLevel(Number(e.currentTarget.value))}
                />
                <PrimaryButton
                  onClick={() => addSkill({ tech: skill, level})}
                >+</PrimaryButton>
              </li>
            </ul>
          </div>

          <h4 className="label">Mentorias Agendadas</h4>

          <div id="mentorship-container">
            <ul>
              {mentorships?.map((mentorship, index) => {
                return (
                  <li key={index}>
                    <MentorshipCard mentorship={mentorship}/>
                  </li>
                )
              })}
              <li>
                <PrimaryButton onClick={() => navigate("/find")}>Agendar novas mentorias</PrimaryButton>
              </li>
            </ul>
          </div>
        </div>
      </ProfileContainer>
    </ProfilePage>
  )
}

export default UserProfile;