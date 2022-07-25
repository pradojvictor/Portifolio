
import Header from "../../components/Header";
import Link from "../../components/Link";
import dindin from "../../assets/images/dindin.png"
import omma from "../../assets/images/omma.png"
import soundgard from "../../assets/images/soundgard.png"
import lavie from "../../assets/images/lavie.png"
import portfolio from "../../assets/images/portfolio.png"






import "./style.css"
import Card from "../../components/Card";

function Allwork() {
    return (
        <>
            <Header />
            <body>
                <h4 className="top-w">top work</h4>
                <div className="div-6">

                <div className="div-4">
                    <div className="col-1">
                        <Card titulo="DIN DIN" 
                        textopt="[ responsive project => Mobile First ] : The dindin project, came as a study project, to be displayed in a resolution of 1440p/786p and 480p, the project was done with the studies of html5 and css, in the period of one week ." textoing="[ projeto responsivo => Mobile First ] : O projeto dindin, veio como um projeto de estudo, para ser exibido em uma resolução de 1440p/786p e 480p, o projeto foi feito com os estudos de html5 e css, no periodo de uma semana" imagem={dindin} redirect="https://github.com/pradojvictor/projeto-DinDin" redirect2="https://pradojvictor.github.io/projeto-DinDin/inicio.html" />
                    </div>
                    <div className="col-2">
                        <Card titulo="Omma" textopt="[responsive project => Mobile First ] : This project was the first hands on, it was done within 3 days, as the basic html5 and css, it served so that I could see in practice the content assimilated in the classes, it was also used normalize a file so that it does not interfere with the various browsers. #FIRSTPROJECT." textoing="[ projeto responsivo => Mobile First ] : Este projeto foi o primeiro mãos na massa, foi feito dentro de 3 dias, como o basico de html5 e css, serviu para que eu pudesse ver na pratica o conteudo assimilado nas aulas, tambem foi usado um arquivo normalize para que não aja interferencia pelos diversos navegadores. #PRIMEIROPROJETO " imagem={omma} redirect="https://github.com/pradojvictor/projeto-omma" redirect2="https://pradojvictor.github.io/projeto-omma/inicio.html" />
                    </div>


                </div>
                <div className="div-4">
                    <div className="col-3">
                        <Card titulo="soundgard" textopt="This project was part of a team challenge, with the aim of developing a website with interaction with an API, using HTML, CSS and JavaScript, as part of the week's challenge, it was also requested that the website behave responsibly, The resolution chosen was that of the ipad mini. project will continue in progress without evaluation purposes but improvements added to the code." textoing="Este projeto foi parte de um desafio em equipe, com o intuito de desenvolver um site com interação com uma API, usando HTML,CSS e JavaScript, como parte do desafio da semana, tambem foi solicitado que o site se comporte de forma resposiva, a resolução excolhida foi a do ipad mini. projeto ira continuar em andamento sem fins de avaliação e sim melhorias adicionadas ao codigo." imagem={soundgard} redirect="https://github.com/pradojvictor/soundgarden" redirect2="https://pradojvictor.github.io/soundgarden/admin.html#" />
                    </div>
                    <div className="col-4">
                        <Card titulo="testao" textopt="An API that allows the creation of records of psychologists, patients and medical records. Our team will also be responsible for creating the database that includes: Creation of the DER and the SQL script that generates the database. The endpoints must be analyzed to be assembled according to the need, observing the data that constitute the 3 entities of the system." textoing="Uma API que permita criar registros de psicólogos, pacientes e prontuários. Nossa equipe também ficará responsável por criar o banco de dados que inclui : Criação do DER e do script SQL que gera o banco. Deve ser analisado os endpoints para seja montado de acordo com a necessidade, observando os dados que constituem a 3 entidades do sistema." imagem={lavie} redirect="https://github.com/pradojvictor/LaVie-Sa-de-Mental---Hands-On-3" redirect2={undefined} />
                    </div>
                </div>
                <div className="div-4">
                    <div className="col-3">
                        <Card titulo="portfolio" textopt="" textoing="[obs: Eu particulamente gostei muito de trabalha nesse projeto, apesar do tempo corrido, devido ao projeto Gamaboss, foi muito bom tira algumas noites, claro que ainda não esta 100%, mais e muito bom aprender algo novo e utilizar, ou aprender pela nescessidade ]Este Projeto tem como finalidade expor todos os meus projetos e as tecnologias que eu estou aprendendo, muitos deles são testes de alguma tecnologia por isso não possuem uma estrutura completa de um site, neste portfolio também temos uma área sobre mim, contatos é uma área com os projetos mais completos, usados como desafio para o aprendizado." imagem={portfolio} redirect="https://github.com/pradojvictor/Portifolio" redirect2="/" />
                    </div>
                    <div className="col-4">
                        <Card titulo="GAMA BOSS" textopt="In progress" textoing="em andamento" imagem={""} redirect="https://github.com/pradojvictor/GamaBoss" redirect2={undefined} />
                    </div>
                </div>

                </div>
            </body>
        </>
    )
}

export default Allwork;

