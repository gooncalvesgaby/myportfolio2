import * as S from "./infoStyle.jsx"
import Eu from "../Infos/eu.png"


function Infos() {
    return(
        <S.Infos>
            <S.Div>
                <div>
                    <h4>Olá, eu sou a</h4>
                    <S.H1>Gaby <i class="fa-solid fa-code"></i></S.H1>
                    <S.H3>Desenvolvedora front-end</S.H3>
                    <S.A  href="https://www.linkedin.com/in/gabrielle-gon%C3%A7alves-b48336165/" target="_blank"><i class="fa-brands fa-linkedin"></i></S.A>
                    <S.A  href="https://github.com/gooncalvesgaby" target="_blank"><i class="fa-brands fa-square-github"></i></S.A>
                </div>
                <S.Img src={Eu}/>
            </S.Div>
        </S.Infos>
    )
}

export default Infos