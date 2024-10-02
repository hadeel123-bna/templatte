import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Price.css'; // Assurez-vous d'importer votre fichier CSS

const Items = (props) => {
  return (
    <div className='card'>
      <Card>
        <Card.Header>{props.title}</Card.Header> 
        <Card.Body>
          <Card.Title>{props.price}</Card.Title>
          <Card.Text>
            <p>{props.time}</p>
            <p>{props.bandwidth}</p>
            <p>{props.storage}</p>
          </Card.Text>
          <Button variant='dark' >Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Items;
