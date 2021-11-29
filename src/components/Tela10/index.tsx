import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela10() {



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
              <Link href="/next9">
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

                <p>10/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>10. What is you priority for skin care?</h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.exfoliant}>
                    <div className="exfoliant">
                    
                    <img  src="exfoliant.png" alt="" data-item="exfoliant"/>
                   
                    <p>EXFOLIANT</p>

                    </div>

            </div>




                <div className={styles.cleasing}>
                     <div className="cleasing">
                        <img src="cleasing.png" alt="" data-item="cleasing"/>

                        <p>CLEASING</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.moisturizer}>
                 <div className="moisturizer">
                    <img src="moisturizer.png" alt="" data-item="moisturizer"/>

                    <p>MOISTURIZER</p>

                  </div>
            </div>


            <div className={styles.facemask}>
                <div className="facemask">
                    <img src="facemask.png" alt="" data-item="facemask"/>

                    <p>FACE MASK</p>

                </div>
            </div>

            </div>





            <div className={styles.coluna3}>

            <div className={styles.lipcare}>
                <div className="lipcare">
                    <img src="lipcare.png" alt="" data-item="lipcare"/>

                    <p>LIP SCRUB/LIP CARE</p>

                </div>
            </div>


            <div className={styles.eyecream}>
                <div className="eyecream">
                    <img src="eyecream.png" alt="" data-item="eyecream"/>

                    <p>EYE CREAM</p>

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