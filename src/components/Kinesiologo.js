import React from 'react'
import { Card } from 'react-bootstrap'


const Kinesiologo = ({ kinesiologo }) => {
  return (
    <Card className='my-3 p-3 rounded'> 
     
       <Card.Img src={kinesiologo.image} variant='top'/>
     
    <Card.Body>
      
         <Card.Title as='div'>
         <strong>{kinesiologo.name} </strong> 
         </Card.Title>
      

       <Card.Text>
           <div className='my-3'>
            {kinesiologo.descripcion}
           </div>
       </Card.Text>    
        
    </Card.Body>

    </Card>
  )
}

export default Kinesiologo