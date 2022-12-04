import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Pic from '../components/Pic'
import picsinicio from '../picsinicio'


const Home = () => {
  return (
    <>
     <Header />
       <main className='py-3'>
          <Container className='center-text center-img'>
          <br />
          <Col className='text-center py-3'>
             <img className='center-img'
              alt=""
              src="/marca.svg"
              width="500"
              height="200"
              //className="d-inline-block align-center"
              />
             <h1>Rehabilitacion  Neuropediatrica</h1> 
             
                         
            </Col>
            
            
       <Row>
      
          {picsinicio.map(pic => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <Pic pic ={pic} />
            </Col>
          ))}
        
        </Row>
            
          </Container>
       </main>
       <Footer />

    </>
  )
}

export default Home