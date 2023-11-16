// /frontend/src/components/Card.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const myCard = ({ title, content }) => {
  return (
    <Card style={{ width: '18rem', marginLeft:"100px"}}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button variant="primary">Go nowhere</Button>
      </Card.Body>
    </Card>
  );
};

export default myCard;
