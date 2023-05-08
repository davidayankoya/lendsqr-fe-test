import React, { MouseEventHandler } from 'react'
import style from './index.module.scss'

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "outline" | "solid";
    color?: string;
    textColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button(props: ButtonProps) {
    return (
        <button
            className={`${style.btn} ${props.variant === 'outline' ? style.outline : style.default} ${props.className}`}
            // style={{ borderColor: props.variant === 'outline' ? props.color : 'initial', backgroundColor: props.variant === 'outline' ? props.color : 'initial', color: props.textColor }}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}