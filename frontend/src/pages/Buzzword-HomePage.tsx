import React from "react";
import './homepage.css';
import logo                 from '../assets/images/Logo.png';
import { Container }        from "react-bootstrap";
import { Row }              from "react-bootstrap";
import { Col }              from "react-bootstrap";
import { Button }           from "react-bootstrap";
import { Image }            from "react-bootstrap";


export function BuzzwordHomePage() {

    return (
        <div>
            <Container fluid className="banner-top">
                <Row>
                    <Col><p>Coming Soon To Product Hunt 🚀</p></Col>
                </Row>
            </Container>
            <Container className="logo-container">
                <Row>
                    <Col><Image src={logo} />
                    </Col>
                </Row>
            </Container>
            <Container className="main-content">
                <Row>
                    <h1>[Engaging] your [emerging markets]<br/>so you don't have to.</h1>
                </Row>
                <Row>
                    <p>Startup? 30-under-30-to-be? Use the button below to generate your next big mission statement that will make the world a better&nbsp;place.</p>
                </Row>
                <Row>
                    <Button size="lg" variant="outline-primary">Buzz It!</Button>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>Created by 🦌 Soft Animal Design &amp; Development</Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );

}
