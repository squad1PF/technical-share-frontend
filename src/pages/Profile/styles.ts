import styled from "styled-components";

export const ProfilePage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4% 8%;
    height: 100%;

    h4.label {
        margin-top: 8%;
        color: ${props => props.theme.palette.primary.main};
        width: 100%;
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
            
            div#contact-wrapper {
                font-size: 12pt;
            }
        }
    }

    div#skills-container {
        width: 100%;

        ul {
            list-style: none;

            li {
                display: flex;
                justify-content: space-between;
            }
        }
    }
`;