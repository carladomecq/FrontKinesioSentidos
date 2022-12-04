import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'



const NuevoPaciente = () => {
  return (
    <>
     <Header />
       <main className='py-3'>
          <Container className='center-text'>
          <br />
             <h1 className='center-text py-3'> Nuevo Paciente </h1>
        
   
            
          </Container>
       </main>
       <Footer />

    </>
  )
}

export default NuevoPaciente