import { useState } from 'react';
import axios from 'axios'
import { Button, Form, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Formulario = () => {

  const URL = 'http://localhost:9000/crear';

  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    consulta: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  };

  const handleClick = async () => {
    await axios.post(URL, inputs)
    setInputs({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      consulta: "",
    })

    Swal.fire({
      title: 'Dato enviado Correctamente',
      text: 'Gracias por enviar sus Datos',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  };
  

  return (
    <Container className="m3 p5 d-flex flex-column align-items-center justify-content-center">
      
      <div className="d-flex flex-column align-items-left justify-content-center p-3 m-5">
        <h1>¡Dejanos tu Consulta!</h1>
    
      {Object.keys(inputs).map((key, index) => (
        <Form.Group className="pt-3" key={index} style={{ maxWidth: "600px" }}>
          <Form.Label id="form" >
            {key === "consulta"  ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1)}</Form.Label>
          <Form.Control
          
            name={key}
            value={inputs[key]}
            onChange={handleChange}
          />
        </Form.Group>




        
        
      ))}
        <Button className="mt-4 " onClick={handleClick}>Enviar</Button>
    </div>
    </Container>
  );
};

export default Formulario;