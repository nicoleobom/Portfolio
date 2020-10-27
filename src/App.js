import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
import Home from './components/Home/index';
import About from './components/About/index';
import Portfolio from './components/Portfolio/index';
import Footer from './components/Footer/index';

export default class App extends React.Component {
  componentDidMount() {
    var path = document.querySelector('#star-path');
    var pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.strokeDashoffset = pathLength;

    window.addEventListener('scroll', function(e) {
      var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      var drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - drawLength;

      if (scrollPercentage >= 0.99) {
        path.style.strokeDasharray = "none";
      } else {
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
      }
  
    })
  }
  render(){
    return (
      <div>
          <svg xmlns="http://www.w3.org/2000/svg" id="star-svg">
            <path id="star-path" fill="none" stroke="black" stroke-width="2"  d="M 262.5 84.501 L 262.5 219.501 Q 262.5 240.501 269.25 248.001 Q 275.753 255.226 291.305 255.491 A 70.275 70.275 0 0 0 292.5 255.501 L 292.5 266.001 Q 282.5 265.501 262.75 264.751 A 1021.33 1021.33 0 0 0 229.145 264.012 A 924.28 924.28 0 0 0 224.5 264.001 Q 204 264.001 185 264.751 Q 170.453 265.325 161.475 265.753 A 1007.713 1007.713 0 0 0 156.5 266.001 L 156.5 255.501 A 40.985 40.985 0 0 0 163.338 254.971 Q 171.961 253.508 176 248.001 A 20.187 20.187 0 0 0 178.659 242.714 Q 180.568 237.259 181.194 228.655 A 126.635 126.635 0 0 0 181.5 219.501 L 181.5 60.501 Q 181.5 50.814 179.726 43.434 A 47.613 47.613 0 0 0 179 40.751 A 27.255 27.255 0 0 0 176.268 34.502 A 20.696 20.696 0 0 0 170.5 28.251 A 20.474 20.474 0 0 0 164.579 25.431 Q 159.881 24.001 153.5 24.001 A 39.573 39.573 0 0 0 124.484 36.236 A 51.117 51.117 0 0 0 123.5 37.251 A 45.368 45.368 0 0 0 111.404 63.868 A 61.364 61.364 0 0 0 111 71.001 L 111 219.501 A 125.802 125.802 0 0 0 111.323 228.881 Q 111.982 237.662 113.991 243.132 A 19.678 19.678 0 0 0 116.5 248.001 Q 122 255.501 136 255.501 L 136 266.001 Q 126.5 265.501 108.5 264.751 Q 90.5 264.001 72 264.001 Q 51.5 264.001 31 264.751 Q 15.305 265.325 5.471 265.753 A 1339.765 1339.765 0 0 0 0 266.001 L 0 255.501 A 57.159 57.159 0 0 0 8.078 254.971 Q 17.673 253.597 22.629 248.654 A 16.729 16.729 0 0 0 23.25 248.001 A 19.747 19.747 0 0 0 26.805 242.006 Q 29.126 236.152 29.761 226.924 A 108.459 108.459 0 0 0 30 219.501 L 30 61.501 A 124.152 124.152 0 0 0 29.486 49.774 Q 28.37 38.057 24.832 30.718 A 29.642 29.642 0 0 0 23.5 28.251 A 20.855 20.855 0 0 0 11.375 19.044 Q 6.441 17.501 0 17.501 L 0 7.001 A 336.571 336.571 0 0 0 27.234 8.477 A 303.784 303.784 0 0 0 31 8.501 A 519.008 519.008 0 0 0 62.181 7.597 A 445.404 445.404 0 0 0 73.75 6.751 A 358.604 358.604 0 0 0 95.503 4.228 A 282.795 282.795 0 0 0 111 1.501 L 111 42.001 A 79.862 79.862 0 0 1 123.672 23.929 A 64.201 64.201 0 0 1 143.75 9.501 A 103.189 103.189 0 0 1 171.936 1.365 A 135.256 135.256 0 0 1 191.5 0.001 A 144.075 144.075 0 0 1 204.995 0.593 Q 217.848 1.805 226.75 5.501 Q 237.981 10.163 244.722 16.98 A 37.413 37.413 0 0 1 247 19.501 A 51.753 51.753 0 0 1 254.479 31.536 Q 256.89 36.85 258.534 43.155 A 86.592 86.592 0 0 1 258.75 44.001 Q 262.5 59.001 262.5 84.501 Z" />
          </svg>
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
