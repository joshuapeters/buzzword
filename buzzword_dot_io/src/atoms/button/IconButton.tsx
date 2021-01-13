import React from "react";

interface IconButtonProps {
    onClick:   (e: React.MouseEvent) => void;
    type:      "button" | "submit" | "reset";
    class?:    string;
    iconClass: string;
}

export function IconButton(props: IconButtonProps) {
    return (
        <button onClick={props.onClick} type = {props.type} className = {props.class}>
            <i className = {props.iconClass}/>
        </button>
    )
}
