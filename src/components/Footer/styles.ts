import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: ${props => props.theme.palette.secondary.main};
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 6%;
`;