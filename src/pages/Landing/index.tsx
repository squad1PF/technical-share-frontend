import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCompass, FiGlobe, FiShare2, FiStar } from "react-icons/fi";

import { PrimaryButton } from "../../styles/buttons";
import { LandingPage, LandingContainer } from "./styles";


const Landing: React.FC = () => {
    const navigate = useNavigate();

    return (
        <LandingPage>
            <LandingContainer>

                <section id="view">
                    <h2>Technical Share</h2>
                </section>

                <section id="info">
                    <article id="highlight">
                        <p id="description">
                            A solução perfeita para
                            ampliar sua rede de contatos
                            e dar um UP na sua carreira.
                        </p>
                        <PrimaryButton onClick={() => navigate("/signup")}>
                            Acesse agora
                        </PrimaryButton>
                    </article>

                    <hr/>

                    <h2>O que você encontra por aqui?</h2>

                    <div id="info-container">
                        <div className="card">
                            <FiStar size={24} color="#FE4400"/>
                            <p>Dicas inteligentes para melhorar seus resultados.</p>
                        </div>
                        <div className="card">
                            <FiShare2 size={24} color="#FE4400"/>
                            <p>Se conecte com os melhores profissionais do mercado de TI.</p>
                        </div>
                        <div className="card">
                            <FiCompass size={24} color="#FE4400"/>
                            <p>Conexão rápida e intuitiva com a sua empresa</p>
                        </div>
                        <div className="card">
                            <FiGlobe size={24} color="#FE4400"/>
                            <p>Construa um poderoso network, de forma rápida e segura</p>
                        </div>
                    </div>
                </section>

            </LandingContainer>
        </LandingPage>
    )
}

export default Landing;