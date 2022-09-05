import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap');
    *{
        box-sizing: border-box;
        margin: 0;
    }
    body{
        background: linear-gradient(to right top,#65dfc9,#6cdbeb);
        width: 100%;
        font-family: 'Poppins', sans-serif;
       
    }
    p{
        opacity: 0.6;
        line-height: 1.5;
    }
    img{
        max-width: 100%;
    }
    #root{
        height: 100%;
    }
`;
