import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Kinesiologo from '../components/Kinesiologo'
import kinesiologos from '../kinesiologos'



const Nosotros = () => {
  return (
    <>
      <Header />
       <main className='py-3'>
          <Container className='text-center'>
          <br />
       <h1>NUESTROS ESPECIALISTAS</h1> 
       <Row className='img-center'>
          {kinesiologos.map(kinesiologo => (
            <Col classname= 'md-4'>
                <Kinesiologo kinesiologo={kinesiologo} />
            </Col>

          ))}
       </Row>
       </Container>
       </main>
       <Footer />
    </>
  )
}

export default Nosotros