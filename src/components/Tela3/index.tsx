import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela3() {



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
              <Link href="/next2">
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

                <p>3/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>3. What’s your hair color?</h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.brown}>
                    <div className="black-hair">
                    
                    <img  src="blackHair.png" alt="" data-item="black-hair"/>
                   
                    <p>BLACK</p>

                    </div>

            </div>




                <div className={styles.blue}>
                     <div className="dark-brown-hair">
                        <img src="darkbrownHair.png" alt="" data-item="dark-brown-hair"/>

                        <p>DARK BROWN</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.lightbrownHair}>
                 <div className="light-brown-hair">
                    <img src="lightbrownHair.png" alt="" data-item="light-brown-hair"/>

                    <p>LIGHT BROWN</p>

                  </div>
            </div>



            <div className={styles.blondHair}>
              <div className="blond-hair"> 
                <img src="blondHair.png" alt="" data-item="blond-hair"/>

                <p>BLOND</p>
               </div>
            </div>



            </div>





            <div className={styles.coluna3}>




            <div className={styles.gingerHair}>
              <div className="ginger"> 
                <img src="gingerHair.png" alt="" data-item="ginger-hair"/>

                <p>GINGER</p>
               </div>
            </div>


            <div className={styles.grayHair}>
              <div className="gray-hair"> 
                <img src="grayHair.png" alt="" data-item="gray-hair"/>

                <p>GRAY</p>
               </div>
            </div>



            </div>

            <Link href="/next4">
            
                <Button>
                    Next
                </Button>

            </Link>



        </Form>


                
            </Container>
        </div>
    )
}