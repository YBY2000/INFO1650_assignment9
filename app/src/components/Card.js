// /frontend/src/components/Card.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const myCard = ({header, title, content }) => {
  return (
    <Card style={{ width: '40rem', marginLeft:"100px", textAlign:"center", margin:"0 auto"}}>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default myCard;
