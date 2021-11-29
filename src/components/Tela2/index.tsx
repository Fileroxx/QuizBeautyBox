import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela2() {



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
              <Link href="/">
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

                <p>2/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>2. What’s your eye color?</h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.brown}>
                    <div className="brown">
                    
                    <img  src="brown.png" alt="" data-item="brown"/>
                   
                    <p>BROWN</p>

                    </div>

            </div>




                <div className={styles.blue}>
                     <div className="blue">
                        <img src="blue.png" alt="" data-item="blue"/>

                        <p>BLUE</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.green}>
                 <div className="green">
                    <img src="green.png" alt="" data-item="green"/>

                    <p>GREEN</p>

                  </div>
            </div>



            <div className={styles.amber}>
              <div className="amber"> 
                <img src="amber.png" alt="" data-item="amber"/>

                <p>AMBER</p>
               </div>
            </div>



            </div>





            <div className={styles.coluna3}>




            <div className={styles.black}>
              <div className="black"> 
                <img src="black.png" alt="" data-item="black"/>

                <p>BLACK</p>
               </div>
            </div>



            </div>

        <Link href="/next3">

            <Button>
                Next
            </Button>


        </Link>


        </Form>


                
            </Container>
        </div>
    )
}