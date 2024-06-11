import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
      
    body{
        font-family: 'Poppins', Sans-Sarif;
        background: linear-gradient(to bottom, #1f1c1c, #292726);
        height: 100vh;
        color: rgb(185, 178, 170);
    }
`;

export default Global;

