import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/index';
import Social from './components/Social/index';
import Home from './components/Home/index';
import About from './components/About/index';
import Portfolio from './components/Portfolio/index';
import Experience from './components/Experience/index';
import MobileNav from './components/MobileNav/index';


export default class App extends React.Component {

  render(){
    return (
      <div>
          <Container>
            <Home />
            <Portfolio />
          </Container>
      </div>
    );
  }
}
