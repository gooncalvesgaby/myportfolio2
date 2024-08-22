import {createGlobalStyle} from "styled-components"
import Rodape from "./Components/Rodape/rodape.jsx"
import Rotas from "./Components/Rotas/rotas.jsx"

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Roboto", sans-serif;
font-weight: 300;
font-style: normal;
}

html, body {
 width: 100%;
}
`
function App() {

  return (
    <>
    <GlobalStyle/>
    <Rotas/>
    <Rodape/>
    </>
  )
}

export default App
