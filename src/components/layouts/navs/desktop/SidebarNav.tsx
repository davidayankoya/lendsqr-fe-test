import React, { useEffect, useRef } from 'react'
import style from './SidebarNav.module.scss'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { toggleSidebar } from 'features/uiSlice';

interface SidebarNavProps {
    children: React.ReactNode;
}

export default function SidebarNav({ children }: SidebarNavProps) {
    const dispatch = useAppDispatch()
    const isOpenSidebar = useAppSelector(s => s.ui.isOpenSidebar)
    const popRef = useRef(null)

    const handleClickOutside = (e: MouseEvent) => {
        if (popRef.current && !popRef.current.contains(e.target) && isOpenSidebar) {
            dispatch(toggleSidebar(false))
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    })

    return (
        <nav className={`${style.container} ${isOpenSidebar ? style.openSidebar : ''} scroll-custom`} ref={popRef}>
            {children}
        </nav>
    )
}