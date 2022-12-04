import React from 'react'
import { Card } from 'react-bootstrap'

const Pic = ({ pic }) => {
  return (
    <Card className='my-3 p-3 rounded'> 
      
       <Card.Img src={pic.image} variant='top'/>
     
    </Card>
  )
}

export default Pic