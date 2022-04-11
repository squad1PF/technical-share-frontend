import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    section {
        padding: 12%;
    }

    section#view {
        background-color: ${props => props.theme.palette.secondary.main};
        color: ${props => props.theme.palette.secondary.contrastText};
        //height: 280px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            margin-top: 4%;
            margin-bottom: 4%;
            width: 220px;
            height: 100px;
            background-color: #ffffff40;
        }

        a {
            color: ${props => props.theme.palette.secondary.contrastText};
            text-decoration: none;
        }
    }

    section#info {
        width: 100%;
        max-width: 1200px;
        text-align: center;

        div#info-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 8%;

            div.card {
                width: 100%;
                max-width: 280px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 8%;
                border: 1px solid;
            }

            @media(min-width: 400px) {
                div.card {
                    width: 46%;
                    max-width: 160px;
                    margin: 0 2% 8% 2%;
                }
            }
        }
    }

    @media(min-width: 600px) {
        section {
            padding: 4%;
        }
    }
`