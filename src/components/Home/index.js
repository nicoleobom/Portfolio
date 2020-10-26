import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';
import Navigation from '../Navigation/index';

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
            <Row className="justify-content-md-center body">
                <Col className="center margin-top">
                    <h1 class="gradient">nicole o'bomsawin</h1>
                    <h5>SOFTWARE DEVELOPER</h5>
                    <Navigation />
                </Col>
                
            </Row>
        )
    }
}