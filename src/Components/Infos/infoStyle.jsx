import styled from "styled-components"
const mobileBreakpoint = '768px'

export const Infos = styled.section`
display: flex;
padding: 1%;
align-items: center;
justify-content: space-between;
`

export const Div = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
font-size: 1.6rem;
// background-color: #bdbdbd29;
height: 50vh

@media (max-width: ${mobileBreakpoint}) {
width: 25rem;
}
`

export const H1 = styled.h1`
font-weight: bold
`

export const H3 = styled.h3`
@media (max-width: ${mobileBreakpoint}) {
font-size: 20px;
font-weight: bold;
}
`

export const A = styled.a`
color: inherit;

@media (max-width: ${mobileBreakpoint}) {
margin: 5px;
}
`

export const Img = styled.img`
width: 17vw;
border-radius: 10rem;
margin-top: 2rem;
margin-left: 2rem;

@media (max-width: ${mobileBreakpoint}) {
width: 10rem;
}
`