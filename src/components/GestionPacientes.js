import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const GestionPacientes = () => {

  const [pacientes, setPacientes] = useState([]);

  const URL = 'http://localhost:9000/'; 

  const getPacientes = async () => {
    try {
      const { data } = await axios.get(URL);
      setPacientes(data.paciente)
      console.log(data.paciente);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPacientes()
  }, [])


  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: 'Está seguro de ELIMINAR?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(`${URL}${id}`)
        Swal.fire('Eliminado', '', 'success')
        getPacientes()
      } else if (result.isDenied) {
        Swal.fire('Sus datos no se eliminaron')
      }
    })


    
   axios.delete(URL + id)
   axios.delete(`http://localhost:9000/${id}`);
  }

  return (
    <div className="container text-center m-5">
         <Table className="table m-4">
        <thead className="m-4">
         {/*  <th>ID</th> */}
          <th>Nombre</th>
          <th>Apellido</th>
          <th>EMAIL</th>
          <th>telefono</th>
          <th>CONSULTA</th>
        </thead>
        <tbody className="m-4">
          {pacientes.map(paciente => 
            <tr>
              {/* <td>{paciente._id}</td> */}
              <td>{paciente.nombre}</td>
              <td>{paciente.apellido}</td>
              <td>{paciente.email}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.consulta}</td>
              <td><Button variant="success" className="mt-3">Update</Button></td>
              <td><Button variant="danger" onClick={() => handleDelete(paciente._id)}className="mt-3">Delete</Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default GestionPacientes;