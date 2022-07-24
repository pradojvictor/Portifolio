import Card from "../../components/Card";
import Header from "../../components/Header";
import Link from "../../components/Link";
import iconTraducao from "../../assets/icons/icontraducao.svg"
import iconCv from "../../assets/icons/icon-cv.svg"
import Table from "../../components/tabela";

import cv from "../../assets/docs/Profile.pdf"

import "./style.css";


function Work() {
    return (
        <>
            <Header />
            <body>
                <section className="sec-6">
                    <div className="but-div">
                        <button className="butt-2"><img src={iconTraducao} alt="tradução" /><Link texto="ingles" redirect="/about" color="escuro" targett={undefined} /></button>
                        <button className="butt-2"><img src={iconCv} alt="tradução" /><Link texto="CV" redirect={cv} color="escuro" targett={"_blank"} /></button>
                    </div>
                    <h2 className="tit-1">About</h2>
                    <div className="div-9">
                        <p className="text-7">
                            Tenho formação em eng.civil é desenvolvimento web. Descobri o interesse por coda dentro do curso
                            de Engenharia, a primeira vista comecei a resolver questões do curso usando javascript e
                            peguei o interesse por questões mais complexas que necessitavam de um pouco mais de
                            conhecimento da linguagem , ocorreu a oportunidade para aprender e me aprofundar
                            é hoje tenho conhecimento em tecnologias como nodejs, express, react,
                            sequelize, bem/sass/scss e outros, uma das qualidades que mais gosto
                            é de sempre procura manter meu código limpo e busca novidades pra
                            aplicar nos meus projetos, principalmente se for pratico, pq um
                            coisa que eu aprendi "é que vc não programa pra uma maquina, mas
                            sim para pessoas".
                        </p>
                        <p className="text-7">
                            Como referencia
                            além do portifolio trabalhei em uma plataforma de ensino, também no setor privado trabalhei em uma empresa diretamente ligado ao setor
                            publico é foi lá que eu aprendi a resolver problemas inesperados de forma rapida, e em
                            muitos dos casos eu precisava aprender, pois muitos destes fugiam do meu campo de atuação.
                            Que no final das contas me mostrou que eu poderia resolver qualquer problema. também fiz
                            parte de um equipe que ficaria responsavel pela nova tela de login/registro/ da
                            plataforma lacrei, onde "É um portal para conectar a comunidade LGBTQIA+ a profissionais
                            de saude,advogados e outros".

                        </p>
                        <p className="text-11">"posso não saber... mas sei aprender"</p>
                    </div>
                    <div className="div-8">
                        <div className="div-12">
                            <h3 className="tit-2">soft skill</h3>
                            <p>
                                <Table texto="Trabalhar sob pressão;"></Table>
                                <Table texto="Pensamento crítico;"></Table>
                                <Table texto="Seja uma ponte entre o back-end e o UX/UI;"></Table>
                                <Table texto="Resolução de problemas da sua área de abrangência;"></Table>
                                <Table texto="Espírito colaborativo;"></Table>
                                <Table texto="Flexibilidade;"></Table>
                                <Table texto="Autodidatismo.;"></Table>
                                <Table texto="Sempre estudando;"></Table>
                                <Table texto="Metodologias Agile;"></Table>
                                <Table texto="Inteligência emocional;"></Table>
                                <Table texto="Gerenciamento de Tempo e Produtividade;"></Table>
                                <Table texto="Colaboração e Trabalho em Equipe;"></Table>
                            </p>
                        </div>
                        <div className="div-12">
                            <h3 className="tit-2"> hard skills</h3>
                            <p>
                                <Table texto="HTML5;"></Table>
                                <Table texto="CSS3;"></Table>
                                <Table texto="JavaScript;"></Table>
                                <Table texto="React;"></Table>
                                <Table texto="typescript"></Table>
                                <Table texto="Versionamento de código (como o Git);"></Table>
                                <Table texto="Banco de Dados / MySQL;"></Table>
                                <Table texto="Teste"></Table>
                                <Table texto="Lógica de Programação;"></Table>
                                <Table texto="Sass/LESS/BEM/SCSS;"></Table>
                                <Table texto="Bootstrap/tailwind;"></Table>
                                <Table texto="Libs.js"></Table>
                                <Table texto="Node.js"></Table>
                                <Table texto="Express.js"></Table>
                            </p>
                        </div>
                    </div>

                </section>
            </body>
        </>
    )
}

export default Work;