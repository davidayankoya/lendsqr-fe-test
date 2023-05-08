import { Text } from 'components/UI'
import React from 'react'
import style from './Breadcrumb.module.scss'
import BackButton from 'assets/icons/back-button.svg'
import { NavLink as Link } from 'react-router-dom'


interface BreadcrumbProps {
    text: string;
    to?: string;
    children?: React.ReactNode;
}

export function Breadcrumb({ children, text, to }: BreadcrumbProps) {
    return (
        <div className={style.container}>
            <Link to={to}>
                <img src={BackButton} alt='back button'/>
                <Text className={style.text}>{text}</Text>
            </Link>
            {children}
        </div>
    )
}