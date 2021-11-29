import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela7() {



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
              <Link href="/next6">
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

                <p>7/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>7. What’s your blush color? </h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.pinkBlush}>
                    <div className="pinkBlush">
                    
                    <img  src="pinkBlush.png" alt="" data-item="pinkBlush"/>
                   
                    <p>PINK</p>

                    </div>

            </div>




                <div className={styles.peachBlush}>
                     <div className="peachBlush">
                        <img src="peachBlush.png" alt="" data-item="peachBlush"/>

                        <p>PEACH</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.neutralBlush}>
                 <div className="neutralBlush">
                    <img src="neutralBlush.png" alt="" data-item="neutralBlush"/>

                    <p>NEUTRAL</p>

                  </div>
            </div>



            <div className={styles.bronzeBlush}>
              <div className="bronzeBlush"> 
                <img src="bronzeBlush.png" alt="" data-item="bronzeBlush" />

                <p>BRONZE</p>
               </div>
            </div>



            </div>







            <Link href="/next8">
            
                <Button>
                    Next
                </Button>

            </Link>



        </Form>


                
            </Container>
        </div>
    )
}