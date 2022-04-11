import React, { useEffect, useState } from "react";

import { UserData } from "../../interfaces/user";
import { getUsers } from "../../services/users";

const Find: React.FC = () => {
    const [users, setUsers] = useState<UserData[] | null>(null);
    
    useEffect(() => {
        getUsers((res) => setUsers(res));
    }, []);

    return (
        <>
            <h1>Find Works!</h1>
            {
                users && (
                    users.map((user, index) => (
                        <div key={index}>
                            <p>
                                nome: { user.name }<br/>
                                e-mail: { user.email }
                            </p>
                        </div>
                    ))
                )
            }
        </>
    )
}

export default Find;