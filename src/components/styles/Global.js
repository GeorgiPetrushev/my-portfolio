import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
    }
    body{
        background: linear-gradient(to right top,#65dfc9,#6cdbeb);
        width: 100%;
        font-family: 'Abyssinica SIL', serif;
        font-size: 1.2rem;
       
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
