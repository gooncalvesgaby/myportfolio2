import styled from "styled-components"
const mobileBreakpoint = '768px'

export const Sobre = styled.div`
display: flex;
justify-content: space-evenly;
align-items: start;
padding: 2rem 10%;
margin: 2rem 10%;
text-align: -webkit-center;

@media (max-width: ${mobileBreakpoint}) {
display: flex;
justify-content: center;
}
`

export const Container = styled.div`
@media (max-width: ${mobileBreakpoint}) {
margin-top: 0.9rem;
}
`

export const H2 = styled.h2`
font-size: 1.8rem;
font-weight: initial;
`

export const H3 = styled.h3`
@media (max-width: ${mobileBreakpoint}) {
font-size: 18px;
font-weight: bold;
}
`

export const P = styled.p`
width: 21rem;
font-size: 1.1rem;
margin-top: 1%;
line-height: 1.8em;
`

export const Div = styled.div`
background-color: black;
color: white;
border-radius: 15px;
height: 2.2rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
margin: 10px;

@media (max-width: ${mobileBreakpoint}) {
width: 7rem;
margin: 13px;
}
`