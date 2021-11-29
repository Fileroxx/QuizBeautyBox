import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela9() {



    useEffect(() => {


    const fair = document.querySelector('.fair img')?.getAttribute("data-item")
    const tan = document.querySelector('.tan img')?.getAttribute("data-item")
    const light = document.querySelector('.light img')?.getAttribute("data-item")
    const dark = document.querySelector('.dark img')?.getAttribute("data-item")
    const medium = document.querySelector('.medium img')?.getAttribute("data-item")
    const deep = document.querySelector('.deep img')?.getAttribute("data-item")

    console.log(fair, tan, light, dark, medium, deep)


    }, []);
 

    function handleChoose(e: Event) {

    e.preventDefault();
        


    }



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
              <Link href="/next8">
                <p style={{cursor: 'pointer'}}>
                    Back
                </p>
              </Link> 
            </div>

            </Col>  


            <Col>

            <div className={styles.titulo}>

                <h2>The Beauty Quiz</h2>

            </div>
                
            </Col>


            <Col>

            <div className={styles.numbers}>

                <p>9/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>9. What’s your highlighter color </h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.goldHighlighter}>
                    <div className="goldHighlighter">
                    
                    <img  src="gold.png" alt="" data-item="goldHighlighter"/>
                   
                    <p>GOLD</p>

                    </div>

            </div>




                <div className={styles.peachHighlighter}>
                     <div className="peachHighlighter">
                        <img src="peach.png" alt="" data-item="peachHighlighter"/>

                        <p>PEACH</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.pinkHighlighter}>
                 <div className="pinkHighlighter">
                    <img src="pink.png" alt="" data-item="pinkHighlighter"/>

                    <p>PINK</p>

                  </div>
            </div>


            <div className={styles.champagneHighlighter}>
                 <div className="champagneHighlighter">
                    <img src="champagne.png" alt="" data-item="champagneHighlighter"/>

                    <p>CHAMPAGNE</p>

                  </div>
            </div>


            </div>







            <Link href="/next10">
            
                <Button>
                    Next
                </Button>

            </Link>



        </Form>


                
            </Container>
        </div>
    )
}