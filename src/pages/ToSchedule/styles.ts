import styled from "styled-components";

export const ToSchedulePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
`;

export const ToScheduleContainer = styled.main`
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    padding: 4% 8%;
    display: flex;
    height: 100%;
    width: 100%;
    text-align: center;

    #form-container {
      display: flex;
      flex-direction: column ;
      text-align: center;
      width: 100%;
      margin-top: 8%;
    }

    #form-container label {
      font-size: 1em;
      font-weight: bold;
    }

    #form-container input {
      width: 100%;
      margin-bottom: 5%;
    }

    #form-container textarea {
      width: 100%;
      min-height: 100px;
      margin-bottom: 5%;
      resize: vertical;
      padding: 4%;
    }

    #form-container p {
      color:  #FF0000;
      font-size: 80%;
    }

    button[type=submit] {
      padding: 8px;
      border-radius: 15px;
      border: 2px solid #555555;
      font-size: 15px;
      font-weight: bolder ;
      color: #000;
      background-color: #ffffff40;
      cursor: pointer;
    }

    button[type=submit]:hover {
      background-color: #555555;
      color: white;
    }
`;