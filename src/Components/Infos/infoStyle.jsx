import styled from "styled-components"
const mobileBreakpoint = '480px'

export const Infos = styled.section`
display: flex;
padding: 1%;
align-items: center;
justify-content: space-between;
`

export const Div = styled.div`
display: flex;
// width: 100%;
justify-content: center;
align-items: center;
// font-size: 1.6rem;
height: 50vh

@media only screen and (max-width: ${mobileBreakpoint}) {
width: 25rem;
}
`

export const H1 = styled.h1`
font-weight: bold
`

export const H3 = styled.h3`
@media only screen and (max-width: ${mobileBreakpoint}) {
font-size: 15px;
font-weight: bold;
color: red;
}
`

export const A = styled.a`
color: inherit;

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