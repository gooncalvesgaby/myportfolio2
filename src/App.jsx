import {createGlobalStyle} from "styled-components"
import Inicio from "./Components/Inicio/inicio.jsx"
import Infos from "./Components/Infos/info.jsx"
const GlobalStyle = createGlobalStyle`
*{
margin = 0;
padding = 0;
box-sizing: border-box;
font-family: "Roboto", sans-serif;
font-weight: 300;
font-style: normal;
}
`

function App() {

  return (
    <>
    <GlobalStyle/>
    <Inicio/>
    <Infos/>
    </>
  )
}

export default App
