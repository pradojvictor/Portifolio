import Card from "../../components/Card";
import CardContact from "../../components/CardContact";
import Header from "../../components/Header";
import iconGit from "./../../assets/images/um.svg"
import icon1 from "./../../assets/images/git2.png"
import icon2 from "./../../assets/images/linked.png"
import icon3 from "./../../assets/images/outlok.png"
import icon4 from "./../../assets/icons/icon2.svg"
import icon5 from "./../../assets/icons/icon3.svg"

import Link from "../../components/Link";


import "./style.css";



function Work() {
    return (
        <>
            <Header />
            <body>
                <section className="sec-9">
                    <div className="div-20">
                        <CardContact textoing={""} redirect={"/"} titulo={"GIT"} imagem={icon1} icon={iconGit} />
                        <CardContact textoing={""} redirect={"/"} titulo={"linkedin"} imagem={icon2} icon={icon5} />
                        <CardContact textoing={""} redirect={"/"} titulo={"e-mail"} imagem={icon3} icon={icon4} />
                    </div>
                </section>
                <div className="divi-1">
                    <p>
                        <Link texto="Figma : consulta de UX" redirect="https://www.figma.com/community" targett={"_blank"}></Link>
                    </p>
                    <p>
                        <Link texto="icons : usados no portfolio" redirect="https://iconmonstr.com/ " targett={"_blank"}></Link>
                    </p>
                </div>
            </body>
        </>
    )
}

export default Work;