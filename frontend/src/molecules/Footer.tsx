import React                from "react";
import '../pages/homepage.css';

import { Container }        from "react-bootstrap";
import { Row }              from "react-bootstrap";
import { Col }              from "react-bootstrap";

export function Footer() {
    return (
        <Container fluid className="footer">
            <Container>
                <Row>
                    <Col className="soft-animal-link" md={6} sm={12}>
                        <p>Created by 🦌 &nbsp;<a href="#" title="Soft Animal Design and Development" target="_blank">Soft Animal Design &amp; Development</a></p></Col>
                    <Col md={6} sm={12}><a href='https://ko-fi.com/P5P23CVN6' target='_blank'><img className="coffee-button" src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' alt='Buy Me a Coffee at ko-fi.com' /></a></Col>
                </Row>
            </Container>
        </Container>
    );
}