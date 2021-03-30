import React                from "react";
import '../pages/homepage.css';

import { Container }        from "react-bootstrap";
import { Row }              from "react-bootstrap";
import { Col }              from "react-bootstrap";
import { Image }            from "react-bootstrap";

import logo                 from '../assets/images/Logo.png';


export function Header() {
    return (
        <React.Fragment>
            <div className="header container-position">
                <Container fluid className="banner-top">
                    <Row>
                        <Col>
                            <p>Coming Soon To Product Hunt 🚀</p>
                        </Col>
                    </Row>
                </Container>
                <Container className="logo-container">
                    <Row>
                        <Col>
                            <Image src={ logo } />
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </React.Fragment>   
    );
}