import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="c-m">
                <Row>
                    <Col className="cont cont-2">
                        <h1>my work</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6" className="portSection">
                        <span><h3 className="title">Quarantini</h3></span>
                        <h5>JavaScript // jQuery // AJAX</h5>
                        <p className="box">What better way to solve quarantine boredom than to have an app figure out what to do for you? This app can mix you a drink, tell you a joke, and even inspire you. What else were you planning to do with your time?</p>
                        <a target="_blank" href="https://github.com/nicoleobom/Quarantini"><button>CODE</button></a>
                        <a target="_blank" href="https://nicoleobom.github.io/Quarantini/"><button>DEPLOYED SITE</button></a>
                    </Col>
                    <Col sm="6" className="portSection">
                        <span><h3 className="title">Quizapp</h3></span>
                        <h5>MongoDB // Express // Node.js // React </h5>
                        <p className="box">A web application that authenticates each user upon login and allows them to take quizzes varying by subject and grade level. Once a quiz has been taken, data is sorted and shown on the leaderboard.</p>
                        <a target="_blank" href="https://github.com/nicoleobom/QuizApp"><button>CODE</button></a>
                        <a target="_blank" href="https://quizapp-20.herokuapp.com/signin"><button>DEPLOYED SITE</button></a>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6" className="portSection">
                        <span><h3 className="title">Employee Directory</h3></span>
                        <h5>Node.js // React </h5>
                        <p className="box">An employee directory for managers. This application gives users the ability to view non-sensitive data about their employees, filter by first name or last name, or sort by employee ID.</p>
                        <a target="_blank" href="https://github.com/nicoleobom/Employee-Directory"><button>CODE</button></a>
                        <a target="_blank" href="https://emp-directory-nlo.herokuapp.com/"><button>DEPLOYED SITE</button></a>
                    </Col>
                    <Col sm="6" className="portSection">
                        <span><h3 className="title">Fitness Tracker</h3></span>
                        <h5>MongoDB // Mongoose // Express // Node.js // Morgan </h5>
                        <p className="box">With this fitness tracker, you can easily track new workouts and look at your stats with the dashboard.</p>
                        <a target="_blank" href="https://github.com/nicoleobom/Fitness-Tracker"><button>CODE</button></a>
                        <a target="_blank" href="https://fitness-tracker-06292020.herokuapp.com/"><button>DEPLOYED SITE</button></a>
                    </Col>
                </Row>
            </div>
        )
    }
}