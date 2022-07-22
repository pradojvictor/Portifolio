import "./style.css";

import { Link as LinkRoute} from "react-router-dom"

interface ILinkProps {
    texto?: string;
    redirect: string;
    color?: string;
}


function Link(props: ILinkProps) {
    return(
        <LinkRoute 
        className={`linkDefaut ${props.color}`}
        to={props.redirect}
        >
            {props.texto}
        </LinkRoute>
    )
}

export default Link;