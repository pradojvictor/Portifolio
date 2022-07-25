import Card from "../../components/Card";
import CardWork from "../../components/RepositorioList";
import Header from "../../components/Header";
import Link from "../../components/Link";


import "./style.css";


function Work() {
    return (
        <>
            <Header />
            <body>
                <section className="sec-20">
                    <CardWork/>
                </section>
            </body>
        </>
    )
}

export default Work;