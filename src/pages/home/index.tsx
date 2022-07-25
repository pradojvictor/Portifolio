
import Header from "../../components/Header";
import Link from "../../components/Link";

import perfil from "./../../assets/images/pradoblack.jpg"



import "./style.css"

function Home() {
    return (
        <>
            <Header />
            <body>
                <section className="sec-1">
                    
                    <div className="div-1">
                        <h2>Hi, I am João Victor
                            A Web Developer
                            based in Brazil.</h2>
                        
                        <p>
                        Desenvolvedor web | Font-End | React | Typescript| Javascript | 
                        </p>

                        <button className="butt-1"><Link texto="top work" redirect="/allwork" color="escuro" targett={undefined}/></button>

                    </div>

                    <img src={perfil} alt="foto perfil" className="foto-p" />
                    
                </section>
            </body>
        </>
    )
}

export default Home;

