import styled from "styled-components"
const mobileBreakpoint = '480px'

export const Rodape = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;
background-color: #9e9e9e1a;
padding: 5% 3%;
border-radius: 5px;

@media only screen and (max-width: ${ mobileBreakpoint }) {

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

`