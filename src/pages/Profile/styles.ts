import styled from "styled-components";

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const ProfileContainer = styled.div`
    //box-shadow: 0 0 100px #00000040;
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
            //background-color: ${props => props.theme.palette.secondary.main}
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
        margin-bottom: 8%;

        ul {
            flex-direction: column;
            align-items: center;
            list-style: none;
            display: flex;
            //background-color: #00000020;
            //border-radius: 8px;
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

    @media(min-width: 400px) {
        //text-align: center;

        div#profile-container {
            flex-direction: row;
            
            div#info-wrapper {
                width: auto;
                margin: 0;
                margin-left: 4%;
            }
        }
    }
`;