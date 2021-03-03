import React from "react";

interface BuzzwordParagraphProps {
    value:  string;
    id:     string;
    class?: string;
}

export function BuzzwordParagraph(props: BuzzwordParagraphProps) {
    return (
        <p id={props.id} className={props.class}>{props.value}</p>
    )
}
