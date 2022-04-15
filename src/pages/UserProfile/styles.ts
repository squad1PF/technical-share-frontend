import styled from "styled-components";

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileContainer = styled.div`
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    padding: 4% 8%;
    display: flex;
    height: 100%;
    width: 100%;

    h4.label {
        margin-top: 8%;
        color: ${props => props.theme.palette.primary.main};
        width: 100%;
        text-align: left;
    }

    div#profile-container {
        display: flex;        
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        div#avatar-container {
            width: 6em;
            height: 6em;
            display: flex;
            align-items: center;
            justify-content: space-around;
            min-width: 100px;
            min-height: 100px;
            margin-top: 8%;
        }

        div#info-wrapper {
            flex-direction: column;
            margin-top: 8%;
            display: flex;
            width: 100%;

            h1 {
                line-height: 100%;
                font-size: 18pt;
                color: #4B4FA1;
            }
        }
    }

    div#contact-wrapper {
        font-size: 12pt;
        width: 100%;
    }

    div#skills-container {
        width: 100%;

        ul {
            flex-direction: column;
            align-items: center;
            list-style: none;
            display: flex;
            box-shadow: inset 0 40px 50px #00000020;
            border-top: 4px solid ${props => props.theme.palette.primary.main};
            padding: 4%;
            margin-top: 4%;

            li {
                border-bottom: 1px solid #00000020;
                justify-content: space-between;
                display: flex;
                padding: 2%;
                width: 100%;
            }
        }
    }

    div#mentorship-container {
        width: 100%;

        ul {
            align-items: center;
            list-style: none;
            box-shadow: inset 0 40px 50px #00000020;
            border-top: 4px solid ${props => props.theme.palette.primary.main};
            padding: 4%;
            margin-top: 4%;

            li {
                border-bottom: 1px solid #00000020;
                justify-content: space-between;
                padding: 2%;
                width: 100%;
            }
        }
    }

    .logout-button {
        padding: 8px;
        border-radius: 15px;
        border: 2px solid #555555;
        font-size: 15px;
        font-weight: bolder ;
        color: #000;
        background-color: #ffffff40;
    }

    .logout-button:hover {
        background-color: #555555;
        color: white;
    }

    @media(min-width: 400px) {

        div#profile-container {
            flex-direction: column;
            
            div#info-wrapper {
                width: auto;
                margin: 0;
                margin-left: 4%;
            }
        }
    }
`;