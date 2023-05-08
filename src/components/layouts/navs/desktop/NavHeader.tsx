import React from 'react'
import style from './NavHeader.module.scss'

interface NavHeaderProps {
    children: React.ReactNode;
}

export default function NavHeader({ children } : NavHeaderProps) {
    return (
        <header className={style.container}>
            {children}
        </header>
    )
}