import React, { useState }             from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IconButton }                  from "../atoms/button/IconButton";
import { useGrammar }                  from "../core/hooks/grammar/GrammarHooks";
import { buzzword_grammar }            from "../core/buzzword_grammar";
import { AnalyticsService } from "../core/services/analytics/AnalyticsService";
import copy from "copy-to-clipboard";

interface BuzzwordHeroProps {
    initialHeaderText: string;
    bodyText:          string;
    onBuzzwordChange?: (e: BuzzwordChangeEvent) => void;
}

interface BuzzwordChangeEvent {
    newPhrase:    string;
    isFirstClick: boolean;
}

export function BuzzwordHero(props: BuzzwordHeroProps) {
    const grammar                         = useGrammar();
    const [buzzword, setBuzzword]         = useState(props.initialHeaderText);
    const [isFirstClick, setIsFirstClick] = useState(true);
    const [isCopied, setCopied]           = useState(false);

    function _handleBuzzwordClick() {
        setBuzzword(grammar.getNewGrammar(buzzword_grammar));
        setIsFirstClick(false);
        setCopied(false);
        
        if (props.onBuzzwordChange) {
            props.onBuzzwordChange({
                newPhrase:    buzzword,
                isFirstClick: isFirstClick
            });
        }

        AnalyticsService.PostClickCount();
    }

    function _copyToClipboard() {
        setCopied(false);
        copy(buzzword);
        setCopied(true);
    }


    return (
        <Container className="main-content">
                <Row>
                    <Col className="headline" lg = {10} sm = {12}>
                        <h1 className= { isFirstClick ? "" : "buzzphrase" }>{ buzzword }</h1>
                        {
                            isFirstClick ? null : <a className='icon-link' onClick = { _copyToClipboard }></a>
                        }
                        {
                            isCopied ? <p className="copy-confirmation">Copied!</p> : null
                        }
                    </Col>
                </Row>
                <Row>
                    <Col className="body-copy" lg = {8} sm = {12}>
                        <p>{props.bodyText}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            isFirstClick ?
                                <Button onClick   = { _handleBuzzwordClick }
                                        size      = "lg" 
                                        variant   = "outline-primary">Buzz It!</Button> :
                                <IconButton 
                                        buttonText = "Get another!"
                                        onClick    = { _handleBuzzwordClick } 
                                        type       = "button" 
                                        class      = "btn-outline-primary" 
                                        iconClass  = "icon-refresh icon"/>
                        }
                    </Col> 
                </Row>
            </Container>
    );
}
