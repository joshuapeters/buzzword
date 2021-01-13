import { render }           from "react-dom";
import React, { useState }  from "react";
import { buzzword_grammar } from "../core/buzzword_grammar";
import { header_grammar }   from "../core/header_grammar";
import tracery              from "tracery-grammar";

export function BuzzwordPage() {
    const [headerPhrase] = useState(getTitle());

    const [buzzwordPhrase, setBuzzwordPhrase] = useState(getBuzzword());

    return (
        <>
            <div className = "center jumbotron" id = "buzzword_container">
                <h1>BUZZWORD.IO</h1>
                <h2 id = "header-text">{headerPhrase}</h2>
                <p id = "buzzword-main">{buzzwordPhrase}</p>
            </div>
            <div className = "center">
                <button onClick={handleRefresh} type = "button" className = "btn btn-primary">
                    <i className = "icon-refresh icon-4x"/>
                </button>
            </div>
        </>
    );

    function captializeString(s: string)
    {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    function getBuzzword()
    {
        return fixINGModifier(
            getGrammar(buzzword_grammar).flatten("#origin#")
        );
    }

    function getTitle()
    {
        return fixINGModifier(
            captializeString(
                getGrammar(header_grammar).flatten("#origin#")
            )
        );
    }

    function getGrammar(grammarConfig: any) {
        const grammar = tracery.createGrammar(grammarConfig);
        grammar.addModifiers(tracery.baseEngModifiers);

        return grammar;
    }

    function handleRefresh() {
        setBuzzwordPhrase(getBuzzword());
    }

    function fixINGModifier(text: string)
    {
        return text.replace("eing", "ing");
    }
}


