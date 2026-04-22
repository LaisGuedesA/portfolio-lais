import { FaReact } from "react-icons/fa";
import { RiBrushAiLine } from "react-icons/ri";
import { TiFlash } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import styles from "./Skills.module.css";

export default function Skills() {
    //antes do return vai a logica dos elementos doo html, logica do javascript
    //variaveis, estruturas de dados (arrays e objetos), funcooes, estruturas condicionais/ de decisao (if e else), laços de repetiçao

    const skills = [
        { id: 1, img: <FaReact />, title: "Desenvolvimento Frontend", descr: "Criação de interfaces responsivas com Bootstrap e React" },
        { id: 2, img: <RiBrushAiLine />, title: "Design UI/UX", descr: "Prototipação e criação de experiências de usuário intuitivas e visualmente atraentes com Figma." },
        { id: 3, img: <TiFlash />, title: "Acessibilidade e SEO", descr: "Foco em acessibilidade e SEO para garantir aplicações inclusivas, bem posicionadas nos mecanismos de busca." },
        { id: 4, img: <FaGithub />, title: "Controle de Versão", descr: "Uso de Git e GitHub para colaboração eficiente e gestão de código-fonte." }
    ];

    return (
        <>
            {/* dentro do return vao apenas itens que possuem estrutura html */}
            <section className={styles.mainHeading}>
                <div className={styles.heading}>
                    <div className={styles.headContainerLeft}>
                        <h4 className={styles.headingTitle}>Serviços</h4>
                        <h4 className={styles.headingSubtitle}>Minhas Habilidades</h4>
                    </div>
                    <div className={styles.headContainerRight}>
                        <p className={styles.headingDescription}>Transformo ideias complexas em soluções digitais elegantes e intuitivas, combinando proficiência técnica com um olhar apurado para a experiência do usuário.</p>
                    </div>
                </div>
                <div className={styles.containerCard}>
                    {skills.map((skill) => (
                        <div key={skill.id} className={styles.card}>
                            <p className={styles.cardIcon}>{skill.img}</p>
                            <h3 className={styles.cardTitle}>{skill.title}</h3>
                            <div>
                                <p className={styles.cardDescrip}>{skill.descr}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}