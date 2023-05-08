import React from 'react'
import style from './index.module.scss'
import { Text } from 'components/UI'


interface StatBoxProps {
    icon: string;
    title: string;
    data?: string | number;
}

export function StatBox({ icon, title, data } : StatBoxProps) {
    return (
        <div className={style.container}>
            <img src={icon} alt='number of users' className={style.icon} />
            <Text className={style.title}>{title}</Text>
            <Text className={style.data}>{data}</Text>
        </div>
    )
}