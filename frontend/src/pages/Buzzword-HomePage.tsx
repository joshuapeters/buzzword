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
                    <h1>{ buzzword }</h1>
                </Row>
                <Row>
                    <p>Startup? 30-under-30-to-be? Use the button below to generate your next big mission statement that will make the world a better&nbsp;place.</p>
                </Row>
                <Row>
                    <Button onClick   = { () => setBuzzword(grammar.getNewGrammar(buzzword_grammar)) }
                    size="lg" 
                    variant="outline-primary"
                    >Buzz It!</Button>
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
