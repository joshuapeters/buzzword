import tracery         from "tracery-grammar";
import { useCallback } from "react";

export function useGrammar() {
    const getNewGrammar = useCallback((grammarConfiguration: object, origin: string = "#origin#") =>  {
        const grammar = tracery.createGrammar(grammarConfiguration);
        grammar.addModifiers(tracery.baseEngModifiers);

        return fixINGModifier(grammar.flatten(origin));
    }, []);

    return { getNewGrammar };
}

function fixINGModifier(text: string)
{
    return text.replace("eing", "ing");
}
