import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

export default class Experience extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="cont cont-2">
                        <h1>experience</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="8" className="c-1">
                        <h3 className="b-2">Freelance</h3>
                        <h5>Web Developer</h5>
                        <h5>08/2020 - PRESENT</h5>
                    </Col>
                </Row>
                <Row>
                    <Col sm="8" className="c-1">
                        <h3 className="b-2">Modo Modo Agency</h3>
                        <h5>Senior Account Executive</h5>
                        <h5>09/2019 - PRESENT</h5>
                        <ul>
                            <li>Built relationships with key clients to facilitate and help grow business.</li>
                            <li>Helped create and maintain project timelines, making sure to adjust client and project management team expectations as necessary.</li>
                            <li>Wrote creative briefs and assisted in kick-off meetings with strategy and creative for key, enterprise-level clients.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm="8" className="c-1">
                        <h3 className="b-2">Overit Media</h3>
                        <h5>Account Manager</h5>
                        <h5>04/2018 - 08/2019</h5>
                        <ul>
                            <li>Worked alongside the COO to provide strategic marketing and digital campaigns for local and global clients.</li>
                            <li>Managed budgets and billing for over $800k in revenue.</li>
                            <li>Created, presented, and helped execute strategies for campaign frameworks and creative concepts.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm="8" className="c-1">
                        <h3 className="b-2">Bluesail Marketing</h3>
                        <h5>Co-Founder, Designer and Developer</h5>
                        <h5>07/2017 - 04/2018</h5>
                        <ul>
                            <li>Designed and developed custom WordPress templates to align with each client’s needs.</li>
                            <li>Utilized Bootstrap UI framework and front-end languages like HTML, CSS, and JavaScript.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm="8" className="c-1">
                        <h3 className="b-2">Potratz Advertising</h3>
                        <h5>Marketing Communications Manager</h5>
                        <h5>11/2016 - 06/2017</h5>
                        <ul>
                            <li>Helped create a custom Facebook Messenger bot utilizing Facebook developer tools.</li>
                            <li>Worked alongside the COO to help polish content for a new product launch.</li>
                            <li>Assisted in the creation and execution of a digital strategy to increase new product sales.</li>
                        </ul>
                        <h5>Social Media and PR Specialist</h5>
                        <h5>03/2016 - 11/2016</h5>
                        <ul>
                            <li>Created and posted content for multiple social media platforms.</li>
                            <li>Wrote short-form blogs and scripts for internal videos.</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}