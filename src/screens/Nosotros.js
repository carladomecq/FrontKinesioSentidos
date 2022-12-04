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
          <Container className='center-text'>
          <br />
       <h1>NUESTROS ESPECIALISTAS</h1> 
       <Row>
          {kinesiologos.map(kinesiologo => (
            <Col sm={12} md={6} lg={4} xl={3}>
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