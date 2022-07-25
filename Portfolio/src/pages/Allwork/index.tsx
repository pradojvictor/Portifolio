
import Header from "../../components/Header";
import Link from "../../components/Link";
import foto from "../../assets/images/neymar.png"



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
                        <Card titulo="testao" textopt="nfnf jjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jkAOKA DFOAKDO" textoing="projeto feito em fsfjsk ocom foco em sajkd jgjg j jgjg jflhkodjg gfhughsghdjgh ghsjghhgakhj ghdjgjjkhdgjka jjjjjjjjjjjjjjjjjjjjjjjjjjjj" imagem={foto} redirect="/" redirect2={""} />
                    </div>
                    <div className="col-2">
                        <Card titulo="testao" textopt="nfnf jjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jkAOKA DFOAKDO" textoing="projeto feito em fsfjsk ocom foco em sajkd jgjg j jgjg jflhkodjg gfhughsghdjgh ghsjghhgakhj ghdjgjjkhdgjka jjjjjjjjjjjjjjjjjjjjjjjjjjjj" imagem="" redirect="/" redirect2={undefined} />
                    </div>


                </div>
                <div className="div-4">
                    <div className="col-3">
                        <Card titulo="testao" textopt="nfnf jjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jkAOKA DFOAKDO" textoing="projeto feito em fsfjsk ocom foco em sajkd jgjg j jgjg jflhkodjg gfhughsghdjgh ghsjghhgakhj ghdjgjjkhdgjka jjjjjjjjjjjjjjjjjjjjjjjjjjjj" imagem="" redirect="/work" redirect2={undefined} />
                    </div>
                    <div className="col-4">
                        <Card titulo="testao" textopt="nfnf jjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jkAOKA DFOAKDO" textoing="projeto feito em fsfjsk ocom foco em sajkd jgjg j jgjg jflhkodjg gfhughsghdjgh ghsjghhgakhj ghdjgjjkhdgjka jjjjjjjjjjjjjjjjjjjjjjjjjjjj" imagem="" redirect="/" redirect2={undefined} />
                    </div>
                </div>
                
                </div>
            </body>
        </>
    )
}

export default Allwork;

