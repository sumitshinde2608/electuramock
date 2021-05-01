import React from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import 'bootstrap/dist/css/bootstrap.min.css'
import './moviescard.css';
import {
  FacebookMessengerShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
  TelegramShareButton
} from "react-share"

import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
// import ShareBtn from 'react-share-button';

const Cards = (props) => {
     const { name, Bio, id} = props
    
     return(
    <div>
    <Card 
    style={{ margin : '50px', justify:'center', color:'#222'}} className='card'>
  <Card.Img variant="top" src="https://picsum.photos/100" />
  <Card.Body>
    <Card.Title className="TitleName">{name}</Card.Title>
    <Card.Text className="Text">
      {Bio}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><a href="#">Watch</a></ListGroupItem>
    <ListGroupItem><FacebookMessengerShareButton appId={301995351439710}url={'/Dashboard'}>Messenger  <FaFacebookMessenger/></FacebookMessengerShareButton></ListGroupItem>
    <ListGroupItem><WhatsappShareButton title={name} url={'/Dashboard'}>WhatsApp  <FaWhatsapp/></WhatsappShareButton></ListGroupItem>
    <ListGroupItem><TelegramShareButton title={name} url={'/Dashboard'}>Telegram  <FaTelegramPlane/></TelegramShareButton></ListGroupItem>



  </ListGroup>
</Card>
</div>
);
    
}

export default Cards;
