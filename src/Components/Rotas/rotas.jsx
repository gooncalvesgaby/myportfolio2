import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "../Inicio/inicio.jsx"
import Sobre from "../Sobre/sobre.jsx"
import Header from "../Header/header.jsx"
import Blog from "../Blog/blog.jsx"



export default function Rotas() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route element={ <Inicio/> } path="/"/>
                <Route element={ <Sobre/> } path="/Sobre"/>
                <Route element={ <Blog />} path="/Blog" />
             </Routes>
        </BrowserRouter>
    )
}