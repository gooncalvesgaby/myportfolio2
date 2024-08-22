import * as S from "./sobreStyle.jsx"

function Sobre() {
    return(
        <S.Container>
            <S.Section>
                <S.H2>Um pouco sobre mim</S.H2>
                <S.P>
                Sou a Gaby, tenho 29 anos e moro em São Paulo. Sou 
                desenvolvedora front-end. Tenho como objetivo criar
                projetos marcantes transformando a vida de pessoas
                e a interação delas com o mundo através da Tecnologia. 
                No meu tempo livre gosto de ler, conhecer lugares que
                remetem a historia do nosso mundo, gosto de auto-cuidado,
                viajar, estudar e passar um tempo com as pessoas que eu amo.
                </S.P>
            </S.Section>
            <S.Section>
                <S.H3>SOFT-SKILLS</S.H3>
                <S.Div>Resolutividade</S.Div>
                <S.Div>Organização</S.Div>
                <S.Div>Criatividade</S.Div>
                <S.Div>Trabalho em equipe</S.Div>
                <S.Div>Comunicação assertiva</S.Div>
                <S.Div>Pontualidade</S.Div>
                <S.Div>Proatividade</S.Div>
            </S.Section>
        </S.Container>
    )
}

export default Sobre