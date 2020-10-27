import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

export default class Experience extends React.Component {
    render() {
        return (
            <div className="body" id="experience">
                <Row>
                    <Col className="center">
                        <h1>my experience so far</h1>
                    </Col>
                </Row>
            </div>
        )
    }
}