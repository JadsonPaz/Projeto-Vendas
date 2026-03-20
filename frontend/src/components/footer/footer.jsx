import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                
                
                <div className={styles.brand}>
                    <img src="/imgs/logo.png" alt="logo" />
                    
                </div>

                <div className={styles.linksSection}>
                    <h3>Links Rápidos</h3>
                    <div className={styles.linksContainer}>
                        <Link className={styles.link} to="/">Homepage</Link>
                        <Link className={styles.link} to="/plates">Plates</Link>
                        <Link className={styles.link} to="/profile">Profile</Link>
                    </div>
                </div>

                <div className={styles.contact}>
                    <h3>Contato</h3>
                    <p>(+55) 99 99999-9999</p>
                    <p>email@email.com</p>
                    <p>Rua exemplo, 123</p>
                    <p>São Paulo - SP</p>
                </div>

            </div>

            <div className={styles.bottom}>
                <p>© Desenvolvido por Jadson Paz Sales.</p>
            </div>
        </footer>
    )
}