import styled from "styled-components"
const mobileBreakpoint = '480px'

export const Section = styled.section`
display: flex;
padding: 1%;
align-items: center;
justify-content: center;
flex-direction: column;  
`

export const Infos = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50vh

@media only screen and (max-width: ${mobileBreakpoint}) {
width: 25rem;
}
`

export const About = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 10rem;
`

export const H1 = styled.h1`
font-weight: bold;
font-size: 1.7rem;
`

export const H3 = styled.h3`
font-size: 2rem;

@media only screen and (max-width: ${mobileBreakpoint}) {
font-size: 15px;
font-weight: bold;
}
`

export const H4 = styled.h4`
font-size: 2.5rem;

@media only screen and (max-width: ${mobileBreakpoint}) {
font-size: 1.5rem;
}
`

export const Icons = styled.div`
font-size: 1.5rem;
display: flex;
justify-content: flex-start;
gap: 10px;
`

export const A = styled.a`
color: black;

@media only screen and (max-width: ${mobileBreakpoint}) {
margin: 5px;
}
`

export const Img = styled.img`
width: 17vw;
border-radius: 10rem;
margin-top: 2rem;
margin-left: 2rem;

@media only screen and (max-width: ${mobileBreakpoint}) {
width: 9rem;
}
`

// export const Habilidade = styled.p`
// margin-top: 30px;   
// text-align: center; 
// font-size: 1.5rem;  
// `