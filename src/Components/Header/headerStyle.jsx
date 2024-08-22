import styled from "styled-components"
const mobileBreakpoint = '480px'

export const HeaderBox = styled.div`
background-color: #9e9e9e1a;
display: flex;
padding: 1%;
align-items: center;
justify-content: space-between;
border-radius: 5px;

@media only screen and (max-width: ${mobileBreakpoint}) {
display: flex;
justify-content: center;
align-items: center;
}
`

export const H1 = styled.h1`
font-size: 2rem;

@media only screen and (max-width: ${mobileBreakpoint}) {
font-size: 25px;
}
`

export const Ul = styled.ul`
display: flex;
justify-content: end;
list-style-type: none;
`

export const Li = styled.li`
font-size: 1.3rem;
margin: 1rem;
`
