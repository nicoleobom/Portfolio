import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import PDF from '../../assets/NicoleOBomsawin_Resume.pdf';

export default class Navigation extends React.Component {    
      render(){
        return (
            <Row className="nav" id="nav">
              <Col sm="12">
                  <Link to="/home" className="navlinks navitems">Home</Link>
                  <Link to="/about" className="navlinks navitems">About</Link>
                  <Link to="/portfolio" className="navlinks navitems">Portfolio</Link>
                  <Link to="/experience" className="navlinks navitems">Experience</Link>
                  {/* <Link to="#" className="navlinks navitems">Blog</Link> */}
                  <Link to={PDF} target="_blank" className="navlinks navitems resume" id="resumebtn">Resume</Link>
              </Col>
            </Row>
        )
    }
}