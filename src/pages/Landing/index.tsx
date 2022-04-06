import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
    return (
        <>
            <h1>Landing Works!</h1>
            <Link to="/users">ir para users</Link><br/>
            <Link to="/entrar">entrar com uma conta</Link><br/>
            <Link to="/cadastro">criar uma conta</Link><br/>
        </>
    )
}

export default Landing;