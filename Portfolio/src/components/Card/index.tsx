import "./style.css"
import foto from "./../../assets/images/neymar.png"
import iconGit from "./../../assets/images/um.svg"
import iconSite from "./../../assets/images/dois.svg"
import Link from "../Link";


interface ICardProps {
    textoing: string;
    textopt: string;
    redirect: any; 
    redirect2: any; 
    titulo: string;
    imagem: any;
}

function Card(props: ICardProps) {
    return (
        <body className="um">
            <div className="ui-card">
                <img src={props.imagem} className="img-1" />
                <div className="desc-1">
                    <h2>{props.titulo}</h2>
                    <div className="p-1">
                    <p>{props.textopt}</p>
                    <p>{props.textoing}</p>
                    </div>
                    <a  target={"_blank"} href={props.redirect}><img src={iconGit} className="butt-5" /></a>
                    <a  target={"_blank"} href={props.redirect2}><img src={iconSite} className="butt-5" /></a>
                </div>
            </div>
        </body>
    )
}

export default Card;


// muda o containe para pasta normal, 1:43 do video

{/* <div className="container">  

<div className="card card0">  
    <div className="border">
        <h2>teste</h2>
        <div className="texto">
            <span className="g">testando</span>  
            <span>textodand</span>      
        </div>
    </div>

</div>
</div> */}