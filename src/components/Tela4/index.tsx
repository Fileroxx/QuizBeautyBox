import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela4() {



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

    return alert('você escolheu brown')

        


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
              <Link href="/next3">
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

                <p>4/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>4. What eyeshadows type you like</h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.mate}>
                    <div className="mate">
                    
                    <img  src="mate.png" alt="" data-item="mate"/>
                   
                    <p>MATE</p>

                    </div>

            </div>




                <div className={styles.shining}>
                     <div className="shining">
                        <img src="shining.png" alt="" data-item="shining"/>

                        <p>SHINING</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.colorful}>
                 <div className="colorful">
                    <img src="colorful.png" alt="" data-item="colorful"/>

                    <p>COLORFUL</p>

                  </div>
            </div>



            <div className={styles.nude}>
              <div className="nude"> 
                <img src="nude.png" alt="" data-item="nude"/>

                <p>NUDE</p>
               </div>
            </div>



            </div>





            <div className={styles.coluna3}>




            <div className={styles.glitter}>
              <div className="glitter"> 
                <img src="glitter.png" alt="" data-item="glitter"/>

                <p>GLITTER</p>
               </div>
            </div>


            <div className={styles.smoky}>
              <div className="smoky"> 
                <img src="smoky.png" alt="" data-item="smoky"/>

                <p>SMOKY</p>
               </div>
            </div>



            </div>

            <Link href="/next5">
            
                <Button>
                    Next
                </Button>

            </Link>



        </Form>


                
            </Container>
        </div>
    )
}