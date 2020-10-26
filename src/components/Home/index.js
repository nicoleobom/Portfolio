import React from 'react';
import { Row, Col, Toast } from 'react-bootstrap';
import './index.css';
import TextLoop from "react-text-loop";

export default class Home extends React.Component {
    toggleToast() {
        const toast = document.getElementById('snackbar');
        if(toast.style.visibility === "hidden") {
            toast.style.visibility = "visible"
        } else {
            toast.style.visibility = "hidden"
        }
    }

    render() {
        return (
            <Row className="justify-content-md-center">
                <Col className="center">
                    <h1>nicole o'bomsawin</h1>
                    {/* <TextLoop interval={500}>
                        <h5>MongoDB</h5>
                        <h5>Express</h5>
                        <h5>React</h5>
                        <h5>Node.js</h5>
                        <h5>SQL</h5>
                        <h5>AWS</h5>
                        <h5>Python</h5>
                    </TextLoop> */}

                </Col>
                
            </Row>
        )
    }
}