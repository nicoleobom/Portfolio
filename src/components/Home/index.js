import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';
import Navigation from '../Navigation/index';

export default class Home extends React.Component {
    render() {
        return (
            <Row className="justify-content-md-center body" id="home">
                <Col className="center margin-top">
                    <h1 class="gradient">nicole o'bomsawin</h1>
                    <h5>SOFTWARE DEVELOPER</h5>
                    <Navigation />
                </Col>
            </Row>
        )
    }
}