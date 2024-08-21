import styled from "styled-components"
const mobileBreakpoint = '480px'

export const Rodape = styled.div`
display: flex;
justify-content: space-between;
margin: 2% 2%;
font-size: 1rem;
background-color: #9e9e9e1a;
padding: 0% 2%;
border-radius: 5px;

@media only screen and (max-width: ${ mobileBreakpoint }) {
width: 23rem;
}
`

export const H2 = styled.h2`
font-weight: 500;
`

export const P = styled.p`
font-weight: 500;
`

export const Div = styled.div`
font-size: 3rem;
margin-top: 2rem;
`