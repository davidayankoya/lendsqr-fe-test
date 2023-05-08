import React, { MouseEventHandler } from 'react'
import style from './index.module.scss'

interface TagProps {
    children?: React.ReactNode;
    containerClass?: string;
    onClick?: MouseEventHandler;
}

export function Tag(props: TagProps) {
    return (
        <div className={`${style.container} ${props.containerClass}`} onClick={props.onClick}>
            {props.children}
        </div>
    )
}