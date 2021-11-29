import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela1() {



    // useEffect(() => {


    // let fair = document.querySelector('.fair img')?.getAttribute("data-item")
    // let tan = document.querySelector('.tan img')?.getAttribute("data-item")
    // let light = document.querySelector('.light img')?.getAttribute("data-item")
    // let dark = document.querySelector('.dark img')?.getAttribute("data-item")
    // let medium = document.querySelector('.medium img')?.getAttribute("data-item")
    // let deep = document.querySelector('.deep img')?.getAttribute("data-item")
 
    // console.log(fair, tan, light, dark, medium, deep)

    // }, [])
 
    // function handleChoose(e) {
    //     alert(`ola, voce escolheu fair`)
    // }



    return (
        <div id={styles.tela}>

        <Head>

        <title>Quizz - Beauty Mistery Box</title>

        </Head>


            <Container>



        <div className={styles.menu}>
            <Row>

            <Col>

            <div className={styles.back}>
                <p>
                    Back
                </p>
            </div>

            </Col>  


            <Col>

            <div className={styles.titulo}>

                <h2>The Beauty Quiz</h2>

            </div>
                
            </Col>


            <Col>

            <div className={styles.numbers}>

                <p>1/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>1. What is your skin tone?</h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.fair}>
                    <div className="fair">
                    
                    <img src="fair.png" alt="" data-item="fair"/>
                   
                    <p>FAIR</p>

                    </div>

            </div>




                <div className={styles.tan}>
                     <div className="tan">
                        <img src="tan.png" alt="" data-item="tan"/>

                        <p>TAN</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.light}>
                 <div className="light">
                    <img src="light.png" alt="" data-item="light"/>

                    <p>LIGHT</p>

                  </div>
            </div>



            <div className={styles.dark}>
                    <div className="dark">
                        <img src="dark.png" alt="" data-item="dark"/>

                        <p>DARK</p>
                    </div>
            </div>



            </div>





            <div className={styles.coluna3}>

            <div className={styles.medium}>
              <div className="medium">  
                <img src="medium.png" alt="" data-item="medium"/>

                <p>MEDIUM</p>
               </div>
            </div>



            <div className={styles.deep}>
              <div className="deep"> 
                <img src="deep.png" alt="" data-item="deep"/>

                <p>DEEP</p>
               </div>
            </div>



            </div>

        <Link href="/next2">
                <Button>
                    Next
                </Button>
        </Link>



        </Form>


                
            </Container>
        </div>
    )
}