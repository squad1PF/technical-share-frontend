import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

import { UserData } from "../../interfaces/user";
import { getUsers } from "../../services/users";
import { FindContainer } from "./styles";

type FiltersProps = {
    skill: string;
    role: string;
    seniority: string;
}

const Find: React.FC = () => {
    // UseStates
    const [users, setUsers] = useState<UserData[] | null>(null);
    const [filters, setFilters] = useState<FiltersProps>({
        skill: "",
        role: "",
        seniority: "",
    });
    

    // UseEffects
    useEffect(() => {
        getUsers((res) => setUsers(res));
    }, []);


    // Functions
    const setFilter = (values: {
        skill?: string;
        role?: string;
        seniority?: string;
    }) => {
        setFilters(prev => ({
            ...prev,
            ...values,
        }))
    }


    // Utils
    const filteredUsers = users?.filter(user => {
        const hasSkill = Boolean(
            user.skills
                .find( skill => (
                    skill.tech
                        .toLowerCase()
                        .includes(filters.skill.toLowerCase())
                ))
        );

        const hasRole = Boolean(
            user.role.name
                .includes(filters.role)
        )

        const hasSeniority = Boolean(
            user.role.seniority
                .includes(filters.seniority)
        )

        return (hasSkill && hasRole && hasSeniority);
    })

    return (
        <FindContainer>
            <h2>Procure pessoas</h2>
            
            <div id="filters-container">
                <input  
                    type="text"
                    name="skill"
                    value={filters.skill}    
                    placeholder="Habilidade"
                    onInput={(e) => setFilter({
                        skill: e.currentTarget.value
                    })}
                />

                <select
                    name="role"
                    value={filters.role}
                    onChange={(e) => setFilter({
                        role: e.currentTarget.value
                    })}
                >
                    <option value="" disabled hidden>Área de Atuação:</option>
                    <option value="">Todos</option>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Fullstack</option>
                    <option>UX/UI</option>
                </select>

                <select
                    name="seniority"
                    value={filters.seniority}
                    onChange={(e) => setFilter({
                        seniority: e.currentTarget.value
                    })}
                >
                    <option value='' disabled hidden>Senioridade:</option>
                    <option value="">Todos</option>
                    <option>Estagiário</option>
                    <option>Trainee</option>
                    <option>Júnior</option>
                    <option>Pleno</option>
                    <option>Sênior</option>
                </select>
            </div>

            {
                users && (
                    filteredUsers?.map((user, index) => (
                        <UserCard
                            user={user}
                            key={"user_" + index}
                            elementKey={"user_" + index}
                        />
                    ))
                )
            }
        </FindContainer>
    )
}

export default Find;