import styled from "styled-components";

export const SignInPage = styled.main`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
       margin-bottom: 20px;
    }

    #form-container input {
      width: 100%;
      margin-bottom: 5%;
    }

    button {
        padding: 8px;
        border-radius: 15px;
        border: 2px solid #555555;
        font-size: 15px;
        font-weight: bolder ;
        color: #000;
        background-color: #ffffff40;
    }

    button:hover {
        background-color: #555555;
        color: white;
    }
`;
