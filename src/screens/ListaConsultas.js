import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import GestionPacientes from '../components/GestionPacientes'
import Header from '../components/Header'



const ListaConsultas = () => {
  return (
    <>
     <Header />
       <main className='py-3'>
          <Container className='center-text py-3'>
          <br />
          <h1 className='text-center'> LISTA DE CONSULTAS </h1>
          <GestionPacientes/>         
          </Container>
       </main>
       <Footer />
    </>
  )
}

export default ListaConsultas