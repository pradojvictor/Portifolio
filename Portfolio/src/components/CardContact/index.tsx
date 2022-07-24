import "./style.css"
import foto from "./../../assets/images/neymar.png"
import iconGit from "./../../assets/images/um.svg"
import Link from "../Link";


interface ICardProps {
    textoing: string;
    redirect: any;  
    titulo: string;
    imagem: any;
    icon: any;
}

function CardContact(props: ICardProps) {
    return (
        <body className="dois">
            <div className="u-card">
                <img src={props.imagem} className="img-1" />
                <div className="desc-2">
                    <div className="p-2">
                    <p>{props.textoing}</p>
                    </div>
                    <a  target={"_blank"} href={props.redirect}><img src={props.icon} className="butt-5" /></a>
                </div>
            </div>
        </body>
    )
}

export default CardContact;