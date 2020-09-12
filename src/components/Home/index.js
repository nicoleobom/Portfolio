import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

export default class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col className="cont cont-1">
                    <h1>nicole o'bomsawin</h1>
                    <h3>software developer</h3>
                </Col>
            </Row>
        )
    }
}