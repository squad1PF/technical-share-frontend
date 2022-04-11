import React from "react";

type UserCardProps = {
    name: string;
}

const UserCard: React.FC<UserCardProps> = ({ name }) => {
    return (
        <div>
            <h4>{ name }</h4>
        </div>
    )
}

export default UserCard;