import React, { useState }  from "react";
import { buzzword_grammar } from "../core/buzzword_grammar";
import { header_grammar }   from "../core/header_grammar";
import { IconButton }       from "../atoms/button/IconButton";
import { BuzzwordHero }     from "../molecules/BuzzwordHero";
import { useGrammar }       from "../core/hooks/grammar/GrammarHooks";

export function BuzzwordPage() {
    const grammar                 = useGrammar();
    const [header]                = useState(grammar.getNewGrammar(header_grammar));
    const [buzzword, setBuzzword] = useState(grammar.getNewGrammar(buzzword_grammar));

    return (
        <div>
            <BuzzwordHero
                headerText    = "BUZZWORD.IO"
                introText     = { header }
                paragraphText = { buzzword } />
            <div className = "center">
                <IconButton
                    onClick   = { () => setBuzzword(grammar.getNewGrammar(buzzword_grammar)) }
                    type      = "button"
                    class     = "btn btn-primary"
                    iconClass = "icon-refresh icon-4x"/>
            </div>
        </div>
    );
}


