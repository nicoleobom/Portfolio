import React from 'react';
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import './index.css';

export default class Portfolio extends React.Component {
    render() {
        return (
            <div id="projects" className="body">
                <Row>
                    <Col className="center">
                        <h1>my projects</h1>
                        <Accordion defaultActiveKey="0">
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <h3>Quarantini</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <h3>QuizApp</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        <h3>Journey</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        <h3>MadLibs Generator</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                        <h3>Employee Directory</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        )
    }
}