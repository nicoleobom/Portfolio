import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import './index.css';
import PDF from '../../assets/NicoleOBomsawin_Resume2020.pdf'

export default class Navigation extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.stickyNav)
  }

  stickyNav() {
    var header = document.getElementById('header');
    var homeBtn = document.getElementById('home-btn');
    var sticky = header.offsetTop;

    if(window.pageYOffset > sticky) {
      debugger;
      header.classList.add('sticky');
      homeBtn.classList.add('shown');
    } else {
      header.classList.remove('sticky');
      homeBtn.classList.remove('shown');
    }
  }

  render(){
    return (
        <Row>
          <Col sm="12" className="header" id="header">
            <Nav className="nav-center">
              <Nav.Link href="#home" className="nav-link hidden" id="home-btn">Home</Nav.Link>
              <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
              <Nav.Link href="#about" className="nav-link">About</Nav.Link>
              <Nav.Link href="mailto: nicoleobomsawin@gmail.com" className="nav-link">Contact</Nav.Link>
              <Nav.Link href={PDF} target="_blank" className="nav-link resume-link">Resume</Nav.Link>
            </Nav>
          </Col>
        </Row>
    )
}
}