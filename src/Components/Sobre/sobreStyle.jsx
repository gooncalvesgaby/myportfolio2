import styled from "styled-components"
const mobileBreakpoint = '480px'

export const Container = styled.section`
display: flex;
padding: 2rem 10%;
margin: 2rem 10%;
text-align: -webkit-center;

@media only screen and (max-width: ${mobileBreakpoint}) {
display: inline;
}
`

export const Section = styled.div`
text-align: -webkit-center;
letter-spacing: 1px;

@media only screen and (max-width: ${mobileBreakpoint}) {
}
`

export const H2 = styled.h2`
font-size: 1.8rem;
font-weight: initial;
margin-top: 2rem;

@media only screen and (max-width: ${mobileBreakpoint}) {
font-size: 1.3rem;
font-weight: 700;
}
`

export const H5 = styled.h5`
font-size: 1.1rem;
margin-top: 1%;
line-height: 1.9em;
`

export const P = styled.p`

font-size: 1.1rem;
margin-top: 1%;
line-height: 1.9em;
`