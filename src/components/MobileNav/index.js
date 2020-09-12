import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import PDF from '../../assets/NicoleOBomsawin_Resume.pdf';
import { Row, Col } from 'react-bootstrap';

export default class MobileNav extends React.Component {
    openMobileNav() {
        var links = document.getElementById('myLinks');
        if (links.style.visibility === 'visible') {
            links.style.visibility = 'hidden';
        } else {
            links.style.visibility = 'visible';
        }
    }
    render() {
        return(
            <Row id="m-nav" className="mobile-container">
                <Col class="topnav">
                    <div id="myLinks">
                        <Link to="/home" onClick={this.openMobileNav}><i className="fas fa-home icon"></i></Link>
                        <Link to="/about" onClick={this.openMobileNav}><i className="fas fa-user-alt icon"></i></Link>
                        <Link to="/portfolio" onClick={this.openMobileNav}><i className="fas fa-palette icon"></i></Link>
                        <Link to="/experience" onClick={this.openMobileNav}><i className="fas fa-briefcase icon"></i></Link>
                        <Link to={PDF} target="_blank" onClick={this.openMobileNav}><i className="fas fa-file icon"></i></Link>
                    </div>
                    <a class="icons" onClick={this.openMobileNav}>
                        <i class="fa fa-bars"></i>
                    </a>
                </Col>
            </Row>
        )
    }
}