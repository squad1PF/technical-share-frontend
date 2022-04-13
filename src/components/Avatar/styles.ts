import styled from "styled-components";

export const AvatarWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 40%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    border: 4px solid ${props => props.theme.palette.primary.main};
    padding: 4px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        border-radius: 40%;
    }
`;