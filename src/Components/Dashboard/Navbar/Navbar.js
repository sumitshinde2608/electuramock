import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NavigationBar = () =>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href='/'>  PLEX  </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="mr-auto" />
                
                <Form inline>
                <Link to={'/'}>
                <Button variant="outline-success">Log Out</Button>
                </Link>
                </Form>
            {/* </Navbar.Collapse> */}
            </Navbar>
        </div>
    )
}

export default NavigationBar;