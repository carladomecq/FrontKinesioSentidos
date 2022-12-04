import axios from 'axios';
import { useState, useEffect } from 'react';
import {Table,Button, Container} from 'react-bootstrap';
import Swal from 'sweetalert2'
import Header from './Header'
import Footer from './Footer'

function GestionPacientes() {

    const [pacientes, setPacientes] = useState([]);

    
    const URL ='https://resto-app-back-production.up.railway.app/comments/'

    useEffect( () => {
        axios.get(URL).then((response) => {
         setPacientes(response.data.pacientes);
       });
     }, []);

     const handleDelete = async (id) => {
        await axios.delete(URL+`delete/${id}`);
        setPacientes(pacientes.filter((paciente) => paciente._id !== id));
        Swal.fire(
            'Consulta Eliminada',
             '¡La consulta ha sido eliminada!',
             'error'      
         )
     }
    return (
        <>
        <Header />
            <main className='py-3'>
                 <Container className='center-text py-3'>
                 <br />
                 <h1 className='text-center'> CONSULTAS </h1>
                 <div className='container m-3 p-5'>
       
                 <Table striped bordered hover size="" variant="">
                 <thead>
                 <tr className='text-center'>
                 {/* <th>Ticket id</th> */}
                 <th>Nombre</th>
                 <th>Apellido</th>
                 <th>E-Mail</th>
                 <th>Telefono</th>
                 <th>Comentario</th>
                 <th className='col-1'>Opciones</th>
                 </tr>
                 </thead>
                 <tbody>
                 {pacientes.map((paciente) => (
                 <tr>
                    {/* <td>{paciente._id}</td> */}
                    
                    <td>{paciente.nombre}</td>
                    <td>{paciente.apellido}</td>
                    <td>{paciente.email}</td>
                    <td>{paciente.telefono}</td>
                    <td>{paciente.consulta}</td>
                    <td className='d-grid gap-2 d-md-flex justify-content-md-center'>
                        <Button className='btn btn-danger btn-sm' onClick={()=> handleDelete(paciente._id)}>Eliminar</Button>
                    </td>
                </tr>
                   ))}
                </tbody>
                </Table>
                </div>
                </Container>
            </main>
        <Footer />
        </>
    )
}

export default GestionPacientes;