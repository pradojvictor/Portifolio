import "./style.css";

interface ITableprops {
    children?: JSX.Element;
    texto: string;
}

function Table(props: ITableprops) {
    return (
        <table>
            <tr>
                <td>
                    {props.texto}
                </td>
            </tr>
        </table>
    )
}

export default Table;