import Card from "../../components/Card";
import CardContact from "../../components/CardContact";
import Header from "../../components/Header";
import iconGit from "./../../assets/images/um.svg"
import icon1 from "./../../assets/images/git2.jpg"
import icon2 from "./../../assets/images/linked.jpg"
import icon3 from "./../../assets/images/outlok.jpg"
import icon4 from "./../../assets/icons/icon2.svg"
import icon5 from "./../../assets/icons/icon3.svg"




import "./style.css";


function Work() {
    return (
        <>
            <Header />
            <body>
                <section className="sec-9">
                    <div>
                        <CardContact textoing={""} redirect={"/"} titulo={"GIT"} imagem={icon1} icon={iconGit} />
                        <CardContact textoing={""} redirect={"/"} titulo={"linkedin"} imagem={icon2} icon={icon5} />
                        <CardContact textoing={""} redirect={"/"} titulo={"e-mail"} imagem={icon3} icon={icon4} />
                    </div>

                </section>
            </body>
        </>
    )
}

export default Work;