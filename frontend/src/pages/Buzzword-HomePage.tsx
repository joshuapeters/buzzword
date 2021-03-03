import './homepage.css';
import React            from "react";
import { Header }       from "../molecules/Header";
import { Footer }       from "../molecules/Footer";
import { BuzzwordHero } from '../molecules/BuzzwordHero';


export function BuzzwordHomePage() {
<<<<<<< HEAD
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
            
=======
        return (
        <div className="buzzword-home">
            <Header/>
            <BuzzwordHero initialHeaderText="Welcome To The World's Most Synergistic Buzzword Generation Service" bodyText="Startup? 30-under-30-to-be? Use the button below to generate your next big mission statement that will make the world a better place."/>
            <Footer/>
>>>>>>> ad0c6bae4bbbf6c550c1cd9068144d8efaf16f4b
        </div>
    );

}
