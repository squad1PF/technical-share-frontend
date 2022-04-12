import styled from "styled-components";

export const UserCardWrapper = styled.div`
    border-radius: 4px;
    margin-bottom: 4%;
    width: 100%;
    max-width: 600px;
    border: 1px solid #00000040;
    box-shadow: 0 10px 10px #00000020;
    display: flex;
    padding: 4%;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    transition: .2s ease;

    &:hover {
        scale: 0.8;
        transform: scale(0.98);
    }

    div#avatar-wrapper {
        //background-color: #ffff0040;
        display: flex;
        justify-content: center;
        align-items: center;
        
        div#avatar {
            background-color: #00000020;
            width: 4.6em;
            height: 4.6em;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 40%;
        }
    }

    div#info-wrapper {
        //background-color: #ff000040;
        flex: 1;
        margin-left: 6%;
        font-size: 0.8rem;
        
        h4 {
            font-size: 1rem;
            margin-bottom: 4%;
        }

        div {
            display: flex;
            border-left: 2px solid #00000040;
            margin-bottom: 2%;
            padding: 0 4%;
            border-radius: 2px;
            flex-wrap: wrap;
        }

        span {
            margin-right: 4%;
            color: ${props => props.theme.palette.primary.main};
            margin-bottom: -8px;
        }

        /* p#email-server {
            color: #4B4FA1;
            font-size: 0.6rem;
            margin-left: 1.2%;
            bottom: -2px;
            vertical-align: bottom;
            position: relative;
        } */
    }

    p#skills {
        margin-top: 4%;
        color: ${props => props.theme.palette.primary.main}
    }

    @media(min-width: 350px) {
        flex-direction: row;
        text-align: left;

        div#avatar-wrapper {
            div#avatar {
                width: 5.2em;
                height: 5.2em;
            }
        }
        
    }
`;