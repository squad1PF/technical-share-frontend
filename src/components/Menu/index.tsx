import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import { MenuWrapper, MobileLinks } from "./styles";

const Menu: React.FC = () => {
    const [displayLinks, setDisplayLinks] = useState(true);



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
                    <Link to="/">Home</Link><br/>
                    <Link to="/find">Agendar Encontros</Link><br/>
                    <Link to="/dashboard">Dashboard</Link><br/>
                    <Link to="/signin">Sign In</Link><br/>
                    <Link to="/signup">Sign Up</Link><br/>
                </div>
            </MenuWrapper>

            {
                displayLinks && (
                    <MobileLinks>
                        <Link to="/">Home</Link><br/>
                        <Link to="/find">Agendar Encontros</Link><br/>
                        <Link to="/dashboard">Dashboard</Link><br/>
                        <Link to="/signin">Sign In</Link><br/>
                        <Link to="/signup">Sign Up</Link><br/>
                    </MobileLinks>
                )
            }
        </>
    )
}

export default Menu;