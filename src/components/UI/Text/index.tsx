import React, { MouseEventHandler } from 'react'
import style from './index.module.scss'


interface TextProps {
    className?: string;
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLParagraphElement>;
}

export function Text(props: TextProps) {
    return (
        <p
            className={`${style.text} ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </p>
    )
}