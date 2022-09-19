import styled from "styled-components";

export const ProjectsStyle = styled.div`
min-height: 85vh;
padding-bottom: 3rem;
.project-tittle{
    font-size: 3rem;
    text-align: center;
    margin: 5rem auto;
}
.container-projects{
    margin: auto 1rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    @media screen and (min-width: 768px){
        grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
    }
    grid-gap: 1rem;
    list-style-type: none;

}
.project{
    padding: 0.3rem;
    font-size: 0.8rem;
    min-height: 15rem;
    background: linear-gradient(to right bottom,rgba(255,255,254,0.5), rgba(255,255,255,0.7));
    border-radius: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    p{
        font-size: 1rem;
    }
    .container-project-footer{
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        margin-top: auto;
    }
    .container-project-footer-in{
        display: flex;
        align-items: center;
        a{
            font-size: 1.1rem;
            margin-right: 0.3rem;
        }
        .project-icon{
            font-size: 1.5rem;
        }
    }
    

}

`;