import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

export default class Social extends React.Component {
    render() {
        return (
            <Row id="socialbar">
                <Col className="footer-fixed">
                    <a href="mailto:nicoleobomsawin@gmail.com" rel="noopener noreferrer" target="_blank" className="social"><i className="fas fa-envelope-square fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/nicoleobom" rel="noopener noreferrer" target="_blank" className="social"><i className="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://www.github.com/nicoleobom" rel="noopener noreferrer" target="_blank" className="social"><i className="fab fa-github-square fa-2x"></i></a>
                    <a href="https://www.dev.to/nicoleobom" rel="noopener noreferrer" target="_blank" className="social"><i className="fab fa-dev fa-2x"></i></a>
                </Col>
            </Row>
            
        )
    }
}