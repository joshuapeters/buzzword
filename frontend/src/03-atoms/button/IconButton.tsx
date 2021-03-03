import React from "react";

type ButtonType = "button" | "submit" | "reset";

interface IconButtonProps {
    buttonText?: string;
    onClick:     (e: React.MouseEvent) => void;
    type:        ButtonType;
    class?:      string;
    iconClass:   string;
}

export function IconButton(props: IconButtonProps) {
    return (
        <button onClick={props.onClick} type = {props.type} className = {`btn ${props.class}`}>
            { props.buttonText }
            &nbsp;
            &nbsp;
            <i className = {props.iconClass}/>
        </button>
    )
}
