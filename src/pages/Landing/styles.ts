import styled from "styled-components";
import landingBg from "../../assets/landing-background.png";

export const LandingPage = styled.div`
    display: flex;
    justify-content: center;
`

export const LandingContainer = styled.main`
    box-shadow: 0 0 100px #00000040;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    display: flex;
    height: 100%;
    width: 100%;

    section {
        padding: 12%;
    }

    section#view {
        background-color: ${props => props.theme.palette.secondary.main};
        color: ${props => props.theme.palette.secondary.contrastText};
        justify-content: center;
        flex-direction: column;
        align-items: center;
        display: flex;
        height: 18em;
        width: 100%;

        box-shadow: inset 0 0 50px #00000060;
        //background-image: url(${landingBg});
        background-attachment: fixed;
        background-position: 40%;
        background-size: cover;

        text-shadow: 2px 2px 2px #00000060;

        a {
            color: ${props => props.theme.palette.secondary.contrastText};
            text-decoration: none;
        }
    }

    section#info {
        width: 100%;
        max-width: 1200px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        article#highlight {
            display: flex;
            flex-direction: column;

            p#description {
                text-align: justify;
                margin-bottom: 8%;
                align-self: center;
            }  
        }

        hr {
            margin: 12% 0;
            border: 1px solid #00000020;
        }

        div#info-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 8%;

            div.card {
                margin-bottom: 8%;
                max-width: 280px;
                width: 100%;

                justify-content: center;
                flex-direction: column;
                align-items: center;
                display: flex;

                p {
                    margin-top: 4%;
                }
            }

            @media(min-width: 520px) {
                padding: 0 16%;

                div.card {
                    max-width: 140px;
                    width: 46%;
                }
            }
        }

        @media(min-width: 600px) {
            article#highlight {
                flex-direction: row-reverse;
                justify-content: center;

                p#description {
                    margin-bottom: 0;
                    margin-left: 4%;
                    max-width: 320px;
                }
            }

            hr {
                width: 40%;
                margin: 6% 0;
            }
        }
    }

    @media(min-width: 600px) {
        section {
            padding: 4%;
        }
    }
`