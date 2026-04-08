import styles from './Menu.module.css';

export default function Menu(){
   return(
    <nav className={styles.navbar}>
        <p className={styles.brand}>Laís Guedes</p>
        <ul className={styles.navList}>
            <li className={styles.navItem}>Sobre</li>
            <li className={styles.navItem}>Minhas especialidades</li>
            <li className={styles.navItem}>Projetos</li>
            <li className={styles.navItem}>Contato</li>
        </ul>
    </nav>
   ) 
}