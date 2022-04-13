import styled from 'styled-components';

export const PrimaryButton = styled.button`
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.contrastText};
    border-radius: 8px;
    padding: 8px 16px;
    border: 0;
`;