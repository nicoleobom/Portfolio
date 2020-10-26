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
        {/* <div id="slideup"></div> */}
          <Container>
            <Home />
            {/* <Navigation />
            <MobileNav />
            <Social />
            <Route path="/"><Redirect to="/home"/></Route>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/experience" component={Experience} /> */}
          </Container>
          {/* <div id="slidedown"></div> */}
      </div>
    );
  }
}
