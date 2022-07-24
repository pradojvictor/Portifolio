import "./style.css";

import { Link as LinkRoute } from "react-router-dom"

interface ILinkProps {
    texto?: string;
    redirect: string;
    color?: string;
    targett: any;
}


function Link(props: ILinkProps) {
    return (
        <LinkRoute
            target={props.targett}
            className={`linkDefaut ${props.color}`}
            to={props.redirect}
        >
            {props.texto}


        </LinkRoute>
    )
}

export default Link;