import tracery      from "tracery-grammar";
import { useState } from "react";

export function useGrammar() {
    function getNewGrammar(grammarConfiguration: object, origin: string = "#origin#") {
        const grammar = tracery.createGrammar(grammarConfiguration);
        grammar.addModifiers(tracery.baseEngModifiers);

        return fixINGModifier(grammar.flatten(origin));
    }

    return getNewGrammar;
}

function fixINGModifier(text: string)
{
    return text.replace("eing", "ing");
}
