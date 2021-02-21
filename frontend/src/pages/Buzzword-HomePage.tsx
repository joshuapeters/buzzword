import React, { useState } from "react";
import './homepage.css';
import logo                 from '../assets/images/Logo.png';
import { Container }        from "react-bootstrap";
import { Row }              from "react-bootstrap";
import { Col }              from "react-bootstrap";
import { Button }           from "react-bootstrap";
import { Image }            from "react-bootstrap";
import { useGrammar } from "../core/hooks/grammar/GrammarHooks";
import { header_grammar } from "../core/header_grammar";
import { buzzword_grammar } from "../core/buzzword_grammar";


export function BuzzwordHomePage() {
    const grammar                 = useGrammar();
    const [header]                = useState(grammar.getNewGrammar(header_grammar));
    const [buzzword, setBuzzword] = useState(grammar.getNewGrammar(buzzword_grammar));


    return (
        <div>
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
                        <Image src={logo} />
                    </Col>
                </Row>
            </Container>
            <Container className="main-content">
                <Row>
                    <Col className="headline" lg= {10} sm= {12}>
                        <h1>{ buzzword }</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="body-copy" lg= {8} sm= {12}>
                        <p>Startup? 30-under-30-to-be? Use the button below to generate your next big mission statement that will make the world a better&nbsp;place.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick   = { () => setBuzzword(grammar.getNewGrammar(buzzword_grammar)) }
                        size="lg" 
                        variant="outline-primary"
                        >Buzz It!</Button>
                    </Col> 
                </Row>
            </Container>
            <Container fluid className="footer">
                <Container>
                    <Row>
                        <Col className="soft-animal-link" md={6} sm={12}>
                            <p>Created by 🦌 &nbsp;<a href="#" title="Soft Animal Design and Development" target="_blank">Soft Animal Design &amp; Development</a></p></Col>
                        <Col md={6} sm={12}><a href='https://ko-fi.com/P5P23CVN6' target='_blank'><img className="coffee-button" src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' alt='Buy Me a Coffee at ko-fi.com' /></a></Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );

}
