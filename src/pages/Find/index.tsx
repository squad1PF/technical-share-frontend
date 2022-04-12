import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

import { UserData } from "../../interfaces/user";
import { getUsers } from "../../services/users";
import { FindContainer } from "./styles";

const Find: React.FC = () => {
    const [users, setUsers] = useState<UserData[] | null>(null);
    
    useEffect(() => {
        getUsers((res) => setUsers(res));
    }, []);

    return (
        <FindContainer>
            <h2>Procure pessoas</h2>
            {
                users && (
                    users.map((user, index) => (
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