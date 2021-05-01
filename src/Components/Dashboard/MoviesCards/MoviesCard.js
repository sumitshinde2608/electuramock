import React from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import 'bootstrap/dist/css/bootstrap.min.css'
import './moviescard.css';

 const Cards = (props) => {
     const { name, Bio, year, id} = props
     const age = 2021-year;
    
     return(
    <div>
    <Card 
    style={{ margin : '50px', justify:'center', color:'#222'}} className='card'>
  <Card.Img variant="top" src="https://picsum.photos/100" />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {Bio}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><a href="#">Watch</a></ListGroupItem>
  </ListGroup>
</Card>
</div>
);
    
}

export default Cards;
