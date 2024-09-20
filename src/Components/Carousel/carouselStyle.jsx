import styled from "styled-components"
const mobileBreakpoint = '480px'

export const CarouselContainer = styled.div`
width: 100%; 
max-width: 1200px; 
height: 400px; 
margin-top: 8rem;
display: flex;
justify-content: center;

@media only screen and (max-width: ${mobileBreakpoint}) {
margin: auto;
margin-top: 2rem;
}
`

export const Img = styled.img`
width: 100%; 
height: 60vh; 
object-fit: contain; 
`