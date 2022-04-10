import styled from "styled-components";

export const MenuWrapper = styled.nav`
    background-color: ${props => props.theme.palette.primary.main};
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
    }


    @media(min-width: 540px) {
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
    a {
        text-decoration: none;
        display: inline-block;
        width: 100%;
        padding: 4%;
        text-align: center;
        border-bottom: 1px solid #00000040;
    }

    @media(min-width: 540px) {
        display: none;
    }
`;