import React, { useState }   from "react";
import { buzzword_grammar }  from "../core/buzzword_grammar";
import { header_grammar }    from "../core/header_grammar";
import tracery               from "tracery-grammar";
import { IconButton }        from "../atoms/button/IconButton";
import { BuzzwordHero }      from "../molecules/BuzzwordHero";

export function BuzzwordPage() {
    const [headerPhrase]                      = useState(getTitle());
    const [buzzwordPhrase, setBuzzwordPhrase] = useState(getBuzzword());


    return (
        <div>
            <BuzzwordHero
                headerText   = "BUZZWORD.IO"
                introText    = { headerPhrase }
                paragraphText= { buzzwordPhrase } />
            <div className = "center">
                <IconButton
                    onClick   = { handleRefresh }
                    type      = "button"
                    class     = "btn btn-primary"
                    iconClass = "icon-refresh icon-4x"/>
            </div>
        </div>
    );

    function capitalizeString(s: string)
    {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    function getBuzzword(origin: string = "#origin#")
    {
        return fixINGModifier(
            getGrammar(buzzword_grammar).flatten(origin)
        );
    }

    function getTitle(origin: string = "#origin#")
    {
        return fixINGModifier(
            capitalizeString(
                getGrammar(header_grammar).flatten(origin)
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


