import styled from "styled-components";

export const MenuWrapper = styled.nav`
    background-color: ${props => props.theme.palette.primary.main};
    box-shadow: 0 10px 10px #00000020;
    color: ${props => props.theme.palette.primary.contrastText};
    justify-content: space-between;
    display: flex;

    div#links { display: none }

    div.container {
        display: flex;
        justify-content: end;
        padding: 16px 16px
    }

    a {
        color: ${props => props.theme.palette.primary.contrastText};
        text-decoration: none;
        margin-left: 4%;
        padding: 8px;

        div#profile-link-wrapper {
            justify-content: center;
            align-items: center;
            display: flex;
            width: 100%;

            div#avatar-container {
                max-width: 32px;
                display: none;
            }
        }
    }


    @media(min-width: 725px) {
        #icon {
            display: none;
        }

        div#links {
            display: flex;
            flex: 1;
        }
    }
`

export const MobileLinks = styled.div`
    box-shadow: 0 10px 10px #00000020;

    a {
        border-bottom: 1px solid #00000040;
        justify-content: center;
        text-decoration: none;
        display: inline-flex;
        text-align: center;
        padding: 4%;
        width: 100%;
        
        div#profile-link-wrapper {
            justify-content: center;
            align-items: center;
            display: flex;
            width: 100%;

            div#avatar-container {
                max-width: 48px;
                margin-left: 4%;
            }
        }
    }

    @media(min-width: 725px) {
        display: none;
    }
`;