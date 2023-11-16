import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function JobCard(props) {
  return (
    <Card style={{ width: '30em', margin:"40px 20px 0 20px;"}}>
      <Card.Img src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">See Detail</Button>
      </Card.Body>
    </Card>
  );
}

export default JobCard;