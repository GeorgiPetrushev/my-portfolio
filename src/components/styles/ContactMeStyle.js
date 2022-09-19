import styled from "styled-components";

export const ContactMeStyle = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 3rem;
    font-size: 0.6rem;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(to right bottom,rgba(255,255,254,0.5), rgba(255,255,255,0.7));
    img{
        border-radius: 30%;
        padding: 1rem;
        @media screen and (min-width: 768px){
            width: 25rem;
        }
    }
    a{
        text-decoration: none;
        color: black;
        &:hover{
            color: blue;
        }
    }
    p{
        font-size: 0.8rem;
        margin-top:0.1rem;
        margin-bottom: 0.9rem;
    }
    .container-phone-and-email{
        font-size: 0.5rem;
    }
    .line-up{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container-info{
        margin-top: 2rem;
    }
.icon-container{
    margin-top: 0.5rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    
}

`;