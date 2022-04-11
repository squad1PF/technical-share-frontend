import React from "react";
import { Link } from "react-router-dom";
import { Main } from "./styles";

const Landing: React.FC = () => {
    return (
        <Main>
            <section id="view">
                <h2>Technical Share</h2>
                <div></div>
                <Link to="/signup">Acesse aqui</Link>
            </section>
            <section id="info">
                <h2>O que você encontra por aqui?</h2>

                <div id="info-container">
                    <div className="card">
                        <p>Título 1</p>
                    </div>
                    <div className="card">
                        <p>Título 1</p>
                    </div>
                    <div className="card">
                        <p>Título 1</p>
                    </div>
                    <div className="card">
                        <p>Título 1</p>
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default Landing;