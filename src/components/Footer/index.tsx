import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'

export default function Footer() {
    return (
        <div id={styles.footer}>
            <Container>

            <Row>


                <Col>

                    <div className={styles.copyright}>
                    <p>2021 - All right reserved</p>
                    </div>
                
                </Col>


                <Col>

                    <div className={styles.logo}>
                        <img src="logo.png" alt=""/>
                    </div>        
                
                </Col>


                <Col>
                
                    <div className={styles.icons}>

                    <p>Follow us</p>

                    <img src="tiktok.png" alt=""/>
                    <img src="youtube.png" alt=""/>
                    <img src="instagram.png" alt=""/>

                    </div>
                
                </Col>


            </Row>

            </Container>
        </div>
    )
}