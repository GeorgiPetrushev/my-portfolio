import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap');
    *{
        box-sizing: border-box;
    }
    body{
        background: red;
        font-family: 'Poppins', sans-serif;
        margin: 0;
    }
    p{
        opacity: 0.6;
        line-height: 1.5;
    }
    img{
        max-width: 100%;
    }
`