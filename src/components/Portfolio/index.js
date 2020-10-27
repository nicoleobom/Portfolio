import React from 'react';
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import './index.css';

export default class Portfolio extends React.Component {
    render() {
        return (
            <div id="projects">
                <Row className="justify-content-md-center">
                    <Col sm="8" className="center">
                        <h1>my projects</h1>
                        <Accordion>
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                        <h3>Quarantini</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="body-portfolio">
                                        <p>Quarantini was created at the start of the global pandemic in March 2020. What better way to solve Quarantine
                                            boredom than to have an app figure out what to do for you? The Quarantini app can mix you a drink, tell you
                                            a joke, and even inspire you. What else are you going to do with your time?
                                        </p>
                                        <p>
                                            <b>Built with: </b> REST APIs, HTML, CSS
                                        </p>
                                        <a href="https://www.github.com/nicoleobom/Quarantini" target="_blank"><button className="btn-portfolio">See the code</button></a>
                                        <a href="https://nicoleobom.github.io/Quarantini" target="_blank"><button className="btn-portfolio">Deployed site</button></a>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                        <h3>QuizApp</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="body-portfolio">
                                        <p>QuizApp was created to provide a fun, easy way for kids to continue learning throughout school and when school
                                            is not in session. Includes a leaderboard of the top 10 Quizzers so kids can compete against each other
                                            in different subjects.
                                        </p>
                                        <p>
                                            <b>Built with: </b> MongoDB, Express, React, Node.js, Custom built API
                                        </p>
                                        <a href="https://www.github.com/nicoleobom/QuizApp" target="_blank"><button className="btn-portfolio">See the code</button></a>
                                        <a href="https://quizapp-20.herokuapp.com/" target="_blank"><button className="btn-portfolio">Deployed site</button></a>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                                        <h3>Journey</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className="body-portfolio">
                                        <p>Even though COVID-19 chopped our travel spending in half, 65% of the U.S. population still looks forward
                                            to the days they can travel again. More than half of those individuals plan to drive for their first trip
                                            post-COVID. Whether you know where to go or you just want to get out of the house, Journey can help you
                                            plan your trip and generate places to go!
                                        </p>
                                        <p>
                                            <b>Built with: </b>MongoDB, Express, React, Node.js, Google Places API
                                        </p>
                                        <a href="https://www.github.com/nicoleobom/Journey" target="_blank"><button className="btn-portfolio">See the code</button></a>
                                        <a href="https://www.createmyjourney.app/" target="_blank"><button className="btn-portfolio">Deployed site</button></a>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                                        <h3>MadLibs Generator</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className="body-portfolio">
                                        <p>A beginner's Python starter project. MadLibs is a simple CLI-based that asks a user for specific input
                                            and spits out a Christmas MadLibs snippet as a reponse based on that input!
                                        </p>
                                        <p>
                                            <b>Built with: </b> Python3
                                        </p>
                                        <a href="https://www.github.com/nicoleobom/MadLibs" target="_blank"><button className="btn-portfolio">See the code</button></a>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="card-project">
                                <Card.Header className="card-header">
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                                        <h3>Employee Directory</h3>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body className="body-portfolio">
                                        <p>A simple way for managers to view non-sensitive data about their employees, filter by first name or last name, or sort by employee ID.
                                        </p>
                                        <p>
                                            <b>Built with: </b>React, Node.js
                                        </p>
                                        <a href="https://www.github.com/nicoleobom/Employee-Directory" target="_blank"><button className="btn-portfolio">See the code</button></a>
                                        <a href="https://emp-directory-nlo.herokuapp.com/" target="_blank"><button className="btn-portfolio">Deployed site</button></a>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        )
    }
}