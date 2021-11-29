import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela6() {



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
              <Link href="/next5">
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

                <p>6/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>6. What’s lip color you prefer? </h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.redLip}>
                    <div className="redLip">
                    
                    <img  src="redLip.png" alt="" data-item="redLip"/>
                   
                    <p>RED</p>

                    </div>

            </div>




                <div className={styles.pinkLip}>
                     <div className="pinkLip">
                        <img src="pinkLip.png" alt="" data-item="pinkLip"/>

                        <p>PINK</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.nudeLip}>
                 <div className="nudeLip">
                    <img src="nudeLip.png" alt="" data-item="nudeLip"/>

                    <p>NUDE</p>

                  </div>
            </div>



            <div className={styles.vibrantColorsLip}>
              <div className="vibrantColorsLip"> 
                <img src="vibrantCollorsLip.png" alt="" data-item="vibrantCollorsLip"/>

                <p>VIBRANT COLORS</p>
               </div>
            </div>



            </div>







            <Link href="/next7">
            
                <Button>
                    Next
                </Button>

            </Link>



        </Form>


                
            </Container>
        </div>
    )
}