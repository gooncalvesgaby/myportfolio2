import styled from "styled-components"
const mobileBreakpoint = '480px'

export const CarouselContainer = styled.div`
width: 100%; 
max-width: 1200px; 
height: 400px; 
margin-top: 6rem;
display: flex;
justify-content: center;
cursor: pointer;

@media only screen and (max-width: ${mobileBreakpoint}) {
margin: auto;
}
`

export const Img = styled.img`
width: 100%; 
height: 60vh; 
object-fit: contain; 

@media only screen and (max-width: ${mobileBreakpoint}) {
height: 48vh;
}
`

