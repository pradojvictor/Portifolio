import { useEffect, useState } from "react";
import RepositorioItens from "../RepositorioItens";

interface IRepProps {
    name: string;
    description: string;
    html_url: string;
}

function CardWork() {

    const [repositorios, setRepositorios] = useState<IRepProps[]>([
        // { id: 1, name: "projeto 1" },
        // { id: 2, name: "projeto 2" },
        // { id: 3, name: "projeto 3" }
    ]);

    // function HandleAddReposity() {
    //     setRepositorios([
    //         ...repositorios,
    //         { id: Math.random(), name: "novo" }
    //     ])
    // }

    // consumo da API
    useEffect(() => {
        fetch("https://api.github.com/users/pradojvictor/repos")
            .then((response) => response.json())
            .then((data) => setRepositorios(data))
    },
        [])


    return (

        <section className="repositorio-list">
            <ul>
                {repositorios.map((rep) => {
                    return (
                        <RepositorioItens
                            key={rep.name}
                            repository={rep} imagem={undefined} iconGit={undefined}                      />
                        // <li key={rep.id}>{rep.name}</li>
                    )
                })}

            </ul>
            {/* <button onClick={HandleAddReposity}>add repositorio</button> */}
        </section>

    )
}


export default CardWork;