import React, { useState } from 'react';
import { Row, Col, Toast } from 'react-bootstrap';
import './index.css';

export default class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         show: false
    //     }
    // }

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
            <Row>
                <Col className="cont cont-1 home">
                    <h1>nicole <span onMouseOver={this.toggleToast} onMouseLeave={this.toggleToast}>o'bomsawin</span></h1>
                    <Toast 
                        id="snackbar"
                        style={{ visibility: 'hidden' }}>
                        <Toast.Header closeButton='false'><h6>Yep, it's a weird last name.</h6></Toast.Header>
                        <Toast.Body>
                            <h5>It's pronounced: oh-BOM-sah-win
                            and it means "keeper of the fire".
                            <br /><br />
                            <strong>Origin:</strong> Abanaki / French Canadian Indian</h5>
                        </Toast.Body>
                    </Toast>
                    <h3>software developer</h3>
                    <h5>MongoDB // Express // React // Node.js // SQL</h5>
                    
                </Col>
                
            </Row>
        )
    }
}