import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/Home/index';
import About from './components/About/index';
import Portfolio from './components/Portfolio/index';
import Footer from './components/Footer/index';

export default class App extends React.Component {

  render(){
    return (
      <div>
          <Container>
            <Home />
            <Portfolio />
            <About />
          </Container>
          <Footer />
      </div>
    );
  }
}
