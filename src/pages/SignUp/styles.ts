import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    section {
      margin: 5%;
    }

    h2 {
     text-align: center;
     padding-bottom: 10%;
    }

    #form-container {
      display: flex;
      flex-direction: column ;
      margin-top: auto;
      text-align: center;
    }

    #form-container label {
      font-size: 1em;
      font-weight: bold;
    }

    #form-container input {
      width: 100%;
      margin-bottom: 5%;
    }

    #form-container select {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 100%;
      margin-bottom: 5%;
    }

    #form-container p {
      color:  #FF0000;
      font-size: 80%;
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
`