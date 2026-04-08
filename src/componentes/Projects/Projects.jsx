import { FaReact } from "react-icons/fa";
import { RiBrushAiLine } from "react-icons/ri";
import { TiFlash } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

export default function Projects() {
    //antes do return vai a logica dos elementos doo html, logica do javascript
    //variaveis, estruturas de dados (arrays e objetos), funcooes, estruturas condicionais/ de decisao (if e else), laços de repetiçao

    const skills = [
        { id: 1, img: <FaReact />, title: "Desenvolvimento Frontend", descr: "Criação de interfaces responsivas com Bootstrap e React" },
        { id: 2, img: <RiBrushAiLine />, title: "Design UI/UX", descr: "Prototipação e criação de experiências de usuário intuitivas e visualmente atraentes com Figma." },
        { id: 3, img: <TiFlash />, title: "Acessibilidade e SEO", descr: "Foco em acessibilidade e SEO para garantir aplicações inclusivas, bem posicionadas nos mecanismos de busca e com excelente usabilidade para todos os usuários." },
        { id: 4, img: <FaGithub />, title: "Controle de Versão", descr: "Uso de Git e GitHub para colaboração eficiente e gestão de código-fonte." }
    ];

    return (
        <>
            {/* dentro do return vao apenas itens que possuem estrutura html */}
            <section>
                <div className={styles.heading}>
                    <h4>Serviços</h4>
                    <h4>Minhas Habilidades</h4>
                    <p>Transformando ideias complexas em solições digitais elegantes...</p>
                </div>
                <div className={styles.containerCard}>
                    {}
                </div>
            </section>
        </>
    )
}