import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

export default class About extends React.Component {
    render() {
        return (
            <div className="body" id="about">
                <Row className="justify-content-md-center">
                    <Col sm="8" className="center">
                        <h1>hi! i'm nicole</h1>
                        <div className="content" >
                            <p><b>How do you pronounce your last name?</b><br/>This is a question I always get.
                            It's pronounced oh-BOM-sah-win. Its origin is French-Canadian-Indian and it means "keeper of the fire".
                            I have an Abenaki tribe in Quebec that I'm still a member of!</p>
                            
                            <p><b>Who are you?</b><br />I am a passionate software developer with 4 years of fast-paced advertising agency experience in client-facing roles that have given me invaluable experience.
                                I primarily focus in the MERN stack (MongoDB, Express, React, Nodejs) but I am also learning Python and AWS in my spare time.</p>
                            
                            <p><b>So...why the change in careers?</b><br /> I always found myself gravitating towards web projects when I started my career after college.
                            I experimented a little bit with front-end development and Facebook developer tools at my first position (Marketing Communications Manager, Potratz).
                            After that, I briefly joined a venture where I was able to manage accounts while developing custom WordPress templates and helping with design.
                            While it was something I was passionate about, I hadn't considered a serious career switch until 2019 where I dove head first into CodeAcademy and LinkedIn Learning.
                            I knew I needed more structure and more importantly, collaboration. I enrolled in the Software Engineer bootcamp at Georgia Tech in February 2020 where I honed my skills in front-end while learning back-end technologies like Node and MongoDB.
                            And honestly? I am so happy I found something I'm so passionate about. I love coding because I love problem solving and troubleshooting technical problems. Above all, I love that there are so many different ways to get to the same endpoint and you're <b>always</b> learning.</p>
                            
                            <p><b>What do you do for fun?</b><br />In my free time you can find me (still) sitting at my computer playing games like Valorant, Raft, and Destiny or taking my (almost) 3-year old puppy Freya for a romp in the park.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}