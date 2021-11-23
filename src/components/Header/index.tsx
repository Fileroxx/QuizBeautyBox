import { Container, Row } from "react-bootstrap";
import styles from './styles.module.css'


export default function Header() {
    return (
        <div id={styles.header}>
            <Container>

            <div className={styles.menu}>

            <div className={styles.logo}>
                <img src="logo.png" alt=""/>
            </div>


            <div className={styles.nome}>
                <p>Welcome, Anna</p>
            </div>

            </div>
        
            </Container>
        </div>
    )
}