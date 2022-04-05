import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
    return (
        <>
            <h1>Landing Works!</h1>
            <Link to="/users">ir para users</Link>
        </>
    )
}

export default Landing;