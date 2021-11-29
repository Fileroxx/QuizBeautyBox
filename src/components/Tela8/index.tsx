import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela8() {



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
              <Link href="/next7">
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

                <p>8/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>8. What’s you contour preference:</h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.creamContour}>
                    <div className="creamContour">
                    
                    <img  src="creamContour.png" alt="" data-item="creamContour"/>
                   
                    <p>CREAM</p>

                    </div>

            </div>




                <div className={styles.powderContour}>
                     <div className="powderContour">
                        <img src="powderContour.png" alt="" data-item="powderContour"/>

                        <p>POWDER</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.stickContour}>
                 <div className="stickContour">
                    <img src="stickContour.png" alt="" data-item="stickContour"/>

                    <p>STICK</p>

                  </div>
            </div>

            </div>







            <Link href="/next9">
            
                <Button>
                    Next
                </Button>

            </Link>



        </Form>


                
            </Container>
        </div>
    )
}