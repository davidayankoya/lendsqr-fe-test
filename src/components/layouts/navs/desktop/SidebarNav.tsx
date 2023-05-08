import React from 'react'
import style from './SidebarNav.module.scss'

interface SidebarNavProps {
    children: React.ReactNode;
}

export default function SidebarNav({ children } : SidebarNavProps) {
    return (
        <nav className={`${style.container} scroll-custom`}>
            {children}
        </nav>
    )
}