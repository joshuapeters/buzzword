import React, { useState }  from "react";
import { buzzword_grammar } from "../core/buzzword_grammar";
import { header_grammar }   from "../core/header_grammar";
import { IconButton }       from "../atoms/button/IconButton";
import { BuzzwordHero }     from "../molecules/BuzzwordHero";
import { useGrammar }       from "../core/hooks/grammar/GrammarHooks";

export function BuzzwordPage() {
    const getBuzzwordGrammar      = useGrammar();
    const [header]                = useState(getBuzzwordGrammar(header_grammar));
    const [buzzword, setBuzzword] = useState(getBuzzwordGrammar(buzzword_grammar));

    return (
        <div>
            <BuzzwordHero
                headerText    = "BUZZWORD.IO"
                introText     = { header }
                paragraphText = { buzzword } />
            <div className = "center">
                <IconButton
                    onClick   = { () => setBuzzword(getBuzzwordGrammar(buzzword_grammar)) }
                    type      = "button"
                    class     = "btn btn-primary"
                    iconClass = "icon-refresh icon-4x"/>
            </div>
        </div>
    );
}


