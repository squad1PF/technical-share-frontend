import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import { MenuWrapper, MobileLinks } from "./styles";
import AuthContext from "../../contexts/auth";
import Avatar from "../Avatar";

const Menu: React.FC = () => {
    const [displayLinks, setDisplayLinks] = useState(false);
    const { user } = useContext(AuthContext);

    const links = (
        <>
            <Link to="/">Home</Link><br/>
            <Link to="/find">Agendar Encontros</Link><br/>

            {
                user && (
                    <Link to={`/profile`}>
                        <div id="profile-link-wrapper">
                            { user.name }
                            <div id="avatar-container">
                                <Avatar />
                            </div>
                        </div>
                    </Link>
                ) || (
                    <>
                        <Link to="/signin">Entrar</Link><br/>
                        <Link to="/signup">Cadastrar</Link><br/>
                    </>
                )
            }
        </>
    )

    return (
        <>
            <MenuWrapper>
                <div className="container logo">
                    <h1>Logo</h1>
                </div>

                <div className="container" id="icon">
                    <FiMenu
                        color="#FFFFFF"
                        size={32}
                        onClick={() => setDisplayLinks(prev => !prev)}
                    />
                </div>

                <div className="container" id="links">
                    { links }
                </div>
            </MenuWrapper>

            {
                displayLinks && (
                    <MobileLinks>
                        { links }
                    </MobileLinks>
                )
            }
        </>
    )
}

export default Menu;