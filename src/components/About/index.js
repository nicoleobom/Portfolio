import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

export default class About extends React.Component {
    render() {
        return (
            <div className="c-m">
                <Row>
                    <Col sm="12" className="cont cont-2">
                        <h1>hi! i'm nicole</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="8" className="c-1">
                        <p>
                        I'm a passionate software developer with a primary focus in MongoDB,
                        Express, React, and Node.js (MERN Stack) in addition to front-end languages
                        and frameworks. I have experience collaborating on multiple web projects for small
                        businesses and Fortune 500 global companies. </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="8" className="c-1">
                        <h3 className="b-3">always learning and persisting</h3>
                        <p>It's in my nature to find ways to keep learning and honing in on my skills. When something is broken,
                            I'm absolutely determined to fix it. When I'm looking for an app to fill a void and can't find it,
                            I'll absolutely build it myself.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="8" className="c-1">
                        <h3 className="b-3">nimble and detail oriented</h3>
                        <p>Because my background is in marketing with experience at small, fast-paced advertising agencies,
                            I know when to pivot quickly. I know that a client's mind can change in a snap and I'm great at 
                            making sure a project is completed with great quality down to the last tiny detail.
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}