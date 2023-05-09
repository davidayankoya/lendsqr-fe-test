import { Text } from 'components/UI'
import React from 'react'
import style from './PageHeading.module.scss'


interface PageHeadingProps {
    children?: React.ReactNode;
    title: string;
}

export function PageHeading({ children, title } : PageHeadingProps) {
    return (
        <div className={style.container}>
            <Text className={style.title}>{title}</Text>
            <div className={style.children}>{children}</div>
        </div>
    )
}