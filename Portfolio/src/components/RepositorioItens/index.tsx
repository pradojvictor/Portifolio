import iconGit from "./../../assets/images/um.svg"
import iconSite from "./../../assets/images/dois.svg"
import wall from "./../../assets/images/wall1.jpg"

import "./style.css"



interface IRepItensProps {
    imagem: any;
    iconGit: any;
    repository: {
        name: string;
        description: string;
        html_url: string;
        homepage?: string;
    }
}

function RepositorioItens(props: IRepItensProps) {
    return (
        <li>
             <div className="ui-card1">
                <img src={wall} className="img-13" />
                <div className="desc-13">
                    <h2>{props.repository.name}</h2>
                    <div className="p-13">
                    <p>{props.repository.description}</p>
                    </div>
                    <a  target={"_blank"} href={props.repository.html_url}><img src={iconGit} className="butt-5" /></a>
                    <a  target={"_blank"} href={props.repository.homepage}><img src={iconSite} className="butt-5" /></a>
                    </div>
            </div>
        </li>
    )
}

export default RepositorioItens;

