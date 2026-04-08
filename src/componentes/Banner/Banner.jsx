import styles from './Banner.module.css'

export default function Banner() {
    return (
        <header className={styles.heroSection}>
            <section className={styles.sectioLeft}>
                <p className={styles.subtitle}>Hello, I'm 👋🏽</p>
                   <p className={styles.name}>Laís Guedes</p>
                <p className={styles.title}>FULL STACK DEVELOPER</p>
                <p className={styles.phrase}>Transformo ideias em experiências digitais modernas, acessíveis e impactantes. 
                    <p className={styles.phrase}>Vamos construir algo incrível juntos?</p></p>
                <span className={styles.contact}>
                    <button className={styles.projects}>View Projects</button>
                    <button className={styles.resume}>Download Resume</button>
                </span>
            </section>
            <section className={styles.sectioRight}>
                <div className={styles.profile}>
                </div>
                <img className={styles.profileImg} src="./perfil.png" alt="Imagem autodescritiva" />
            </section>
        </header>
    )
}