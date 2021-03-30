import React, { useState }                from "react";
import '../pages/homepage.css';
import CountUp from 'react-countup';
import { Container }        from "react-bootstrap";
import { Row }              from "react-bootstrap";
import { Col }              from "react-bootstrap";
import { AnalyticsService } from "../core/services/analytics/AnalyticsService";

export function Footer() {

    const [clickCount, setClickCount] = useState(10000);    
    
    Promise.all([AnalyticsService.GetClickCount()]).then((r) => {
        setClickCount(r[0].data.value)
    });

    function getCounter() {
        return (
            <Col className="soft-animal-link" md={4} sm={12}>
                <p>Over { <CountUp end={clickCount}/> } buzzwords generated!</p>
            </Col>
        );
    }

    return (
        <div className="container-position">
            <Container fluid className="footer">
                <Container>
                    <Row>
                        <Col className="soft-animal-link" md={5} sm={12}>
                            <p>Created by 🦌 Soft Animal Design and Development</p>
                        </Col>

                        {
                            getCounter()
                        }
                
                        {/* <p>Created by 🦌 &nbsp;<a href="#" title="Soft Animal Design and Development" target="_blank">Soft Animal Design &amp; Development</a></p></Col> */}
                        <Col md={3} sm={12}><a href='https://ko-fi.com/P5P23CVN6' target='_blank' rel="noreferrer"><img className="coffee-button" src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' alt='Buy Me a Coffee at ko-fi.com' /></a></Col>
                    </Row>
                </Container>
            </Container>
        </div>
        
    );
}