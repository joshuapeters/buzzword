import React from "react";
import "./header.css";

interface HeaderProps {
    value:  string;
    id:     string;
    class?: string;
}

export function Header(props: HeaderProps) {
    return (
        <h2 id={props.id} className={props.class}>
            {props.value}
        </h2>
    )
}
