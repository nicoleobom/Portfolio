import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import PDF from '../../assets/NicoleOBomsawin_Resume.pdf';

export default class Navigation extends React.Component {    
      render(){
        return (
            <Row>
              <Col sm="12">
                <Nav className="nav-center">
                  <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
                  <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                  <Nav.Link href="#Experience" className="nav-link">Experience</Nav.Link>
                  <Nav.Link href="mailto: nicoleobomsawin@gmail.com" className="nav-link">Contact</Nav.Link>
                  <Nav.Link href="#Resume" className="nav-link">Resume</Nav.Link>
                </Nav>
              </Col>
            </Row>
        )
    }
}