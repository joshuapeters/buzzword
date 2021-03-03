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

import { Header }           from "../molecules/Header";
import { Footer }           from "../molecules/Footer";


export function BuzzwordHomePage() {
    const grammar                 = useGrammar();
    const [header]                = useState(grammar.getNewGrammar(header_grammar));
    const [buzzword, setBuzzword] = useState(grammar.getNewGrammar(buzzword_grammar));


    return (
        <div>
            
            <Header></Header>
            
            <Container className="main-content">
                <Row className="">
                    <Col className="headline blue-border" lg= {10} sm= {12}>
                        <h1 className="buzzphrase">{ buzzword }</h1>
                        <i className="icon-link"></i>
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

            <Footer></Footer>
            
        </div>
    );

}
