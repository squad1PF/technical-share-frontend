import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        width: 100%;
        height: 100%;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;