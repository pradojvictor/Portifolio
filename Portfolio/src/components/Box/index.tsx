import "./style.css";

interface IboxProps {
    background: string;
    children?: JSX.Element;
}

function Box(props: IboxProps) {
    return(
        <section className={`box ${props.background}`}>
            {props.children}
        </section>
    )
}

export default Box;