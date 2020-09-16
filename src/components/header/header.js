import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './header.css'
import { Link } from "react-scroll";

export default class header extends Component {
    render() {
        return (
            <>
            <header className="header-area header-sticky">
                <Container>
                    <Row>
                        <Col md={12}>
                        <Navbar className="main-nav" expand="lg">
  <Navbar.Brand className="logo" href="#home">Training <em>Studio</em></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav as="ul" className="nav">
    <li>< Nav.Link className='active'> <Link to="features" spy={true} smooth={true}>Home</Link></Nav.Link></li>
         <li><Nav.Link><Link to="features" spy={true} smooth={true}>About</Link></Nav.Link></li>
         <li><Nav.Link><Link to="our-classes" spy={true} smooth={true}>Classes</Link></Nav.Link></li>
         <li><Nav.Link><Link to="schedule" spy={true} smooth={true}>Schedules</Link></Nav.Link></li>
         <li><Nav.Link><Link style={{all: 'unset'}} to="contact-us" spy={true} smooth={true}>Contact</Link></Nav.Link></li>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
                        </Col>
                    </Row>
                </Container>
              
</header>
            </>
        )
    }
}
