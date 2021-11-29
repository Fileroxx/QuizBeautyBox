import { Button, Input } from "@material-ui/core";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Tela5() {



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
              <Link href="/next4">
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

                <p>5/10</p>

            </div>

                
            </Col>

            </Row>
        </div>










        <Form>

            <h5>5. What’s your eyeliner preference: </h5>


            <div className={styles.coluna1}>

            
         
            <div className={styles.blackEyeliner}>
                    <div className="blackEyeliner">
                    
                    <img  src="blackEyeliner.png" alt="" data-item="blackEyeliner"/>
                   
                    <p>BLACK</p>

                    </div>

            </div>




                <div className={styles.brownEyeliner}>
                     <div className="brownEyeliner">
                        <img src="brownEyeliner.png" alt="" data-item="brownEyeliner"/>

                        <p>BROWN</p>

                     </div>
                </div>



            </div>





            <div className={styles.coluna2}>

            <div className={styles.metallicEyeliner}>
                 <div className="metallicEyeliner">
                    <img src="metallicEyeliner.png" alt="" data-item="metallicEyeliner"/>

                    <p>METALLIC</p>

                  </div>
            </div>



            <div className={styles.glitteryEyeliner}>
              <div className="glitteryEyeliner"> 
                <img src="glitteryEyeliner.png" alt="" data-item="glitteryEyeliner"/>

                <p>GLITTERY</p>
               </div>
            </div>



            </div>





            <div className={styles.coluna3}>




            <div className={styles.vibrantEyeliner}>
              <div className="vibrantEyeliner"> 
                <img src="vibrantEyeliner.png" alt="" data-item="vibrantEyeliner"/>

                <p>VIBRANT</p>
               </div>
            </div>





            </div>

            <Link href="/next6">
            
                <Button>
                    Next
                </Button>

            </Link>



        </Form>


                
            </Container>
        </div>
    )
}