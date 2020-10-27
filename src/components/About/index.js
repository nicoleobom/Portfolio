import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

export default class About extends React.Component {
    render() {
        return (
            <div className="body" id="about">
                <Row>
                    <Col sm="12" className="center">
                        <h1>hi! i'm nicole</h1>
                        <p>Loremfjdkslfjsdkljfkdl</p>
                    </Col>
                </Row>
            </div>
        )
    }
}