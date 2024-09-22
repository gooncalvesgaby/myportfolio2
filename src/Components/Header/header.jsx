import * as S from "./headerStyle.jsx"
import { Link } from "react-router-dom"
function Header() {
    return(
        <>
        <S.HeaderBox>
            <S.H1>Gabrielle Gonçalves</S.H1>
            <S.Ul>
                <S.Li><Link to="/">Início</Link></S.Li>
                <S.Li><Link to="/Sobre">Sobre</Link></S.Li>
            </S.Ul>
        </S.HeaderBox>
        </>
    )
}

export default Header