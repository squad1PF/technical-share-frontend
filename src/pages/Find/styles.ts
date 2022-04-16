import styled from "styled-components";

export const FindContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;

    h2 {
        margin-bottom: 4%;
    }

    div#filters-container {
        width: 100%;
        margin-bottom: 8%;
        display: flex;
        flex-direction: column;
        align-items: center;

        input, select {
            width: 100%;
            padding: 4px;
            margin-bottom: 2%;
            max-width: 600px;
        }

        /* select {
            width: 100%;
        } */
    }
`;