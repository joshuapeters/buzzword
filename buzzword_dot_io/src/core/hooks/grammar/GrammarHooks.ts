import tracery      from "tracery-grammar";
import { useState } from "react";

export function useGrammar() {
    function getNewGrammar(grammarConfiguration: object, origin: string = "#origin#") {
        const grammar = tracery.createGrammar(grammarConfiguration);
        grammar.addModifiers(tracery.baseEngModifiers);

        return fixINGModifier(
            capitalizeString(grammar.flatten(origin))
        );
    }

    return getNewGrammar;
}

function fixINGModifier(text: string)
{
    return text.replace("eing", "ing");
}

function capitalizeString(s: string)
{
    return s.charAt(0).toUpperCase() + s.slice(1);
}
