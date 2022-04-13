import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import { MenuWrapper, MobileLinks } from "./styles";

const Menu: React.FC = () => {
    const [displayLinks, setDisplayLinks] = useState(false);

    const links = (
        <>
            <Link to="/">Home</Link><br/>
            <Link to="/find">Agendar Encontros</Link><br/>
            <Link to="/signin">Entrar</Link><br/>
            <Link to="/signup">Cadastrar</Link><br/>
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