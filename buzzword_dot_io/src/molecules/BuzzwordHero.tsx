import { Header }            from "../atoms/header/Header";
import { BuzzwordParagraph } from "../atoms/paragraph/BuzzwordParagraph";
import React                 from "react";

interface BuzzwordHeroProps {
    headerText:    string;
    introText:     string;
    paragraphText: string;
}

export function BuzzwordHero(props: BuzzwordHeroProps) {
    return (
        <div className = "center jumbotron" id="buzzword_container">
            <h1>{props.headerText}</h1>
            <Header id="header-phrase" value={props.introText}/>
            <BuzzwordParagraph id="buzzword-main" value={props.paragraphText} />
        </div>
    );
}
