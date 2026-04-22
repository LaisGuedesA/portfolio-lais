import { div } from "motion/react-client"
import { FaNetworkWired } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { CgLayoutList } from "react-icons/cg";


export default function Projects() {
    const projects = [
        { id: 1, icone: <FaNetworkWired />, titulo: "Workit", descr: "descrição projeto", img: "", ferramentas: "HTML, CSS, JavaScript", botaoGithub: "", demo: "link" },
        { id: 2, icone: <CgWebsite />, titulo: "website Snap", descr: "descrição projeto", img: "", ferramentas: "HTML, CSS, JavaScript", botaoGithub: "", demo: "link" },
        { id: 3, icone: <CgLayoutList />, titulo: "Portfólio Moderno", descr: "descrição projeto", img: "", ferramentas: "HTML, CSS, JavaScript", botaoGithub: "", demo: "link" }
    ]
    return (
        <div>
            {projects.map((projeto) => (
                <div key={projeto.id}>
                    <span>
                        <p>{projeto.icone}</p>
                        <h2>{projeto.titulo}</h2>
                    </span>
                    <p>{projeto.descr}</p>
                    <img src={projeto.img} alt={projeto.descr} />
                    <p>{projeto.ferramentas}</p>
                    <button>{projeto.botaoGithub}</button>
                    <button>{projeto.demo}</button>
                </div>
            ))}
        </div>
    )
}