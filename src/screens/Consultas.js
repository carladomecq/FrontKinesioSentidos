import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import Formulario from '../components/Formulario'
import Header from '../components/Header'





const Consultas = () => {
  return (
    <>
     <Header />
       <main className='py-3'>
          <Container className='center-text py-3'>
          <br />
          <h1 className='text-center'> CONSULTAS </h1>

       
          <Formulario/> 
       
          </Container>
         </main>
       <Footer />
    </>
  )
}

export default Consultas