import React from 'react'
import style from './index.module.scss'
import { Text } from 'components/UI';


interface SectionProps {
    children: React.ReactNode;
    title: string;
}

export function Section(props : SectionProps) {
    return (
        <div className={style.section}>
            <div className={style.heading}>
                <Text className={style.headingText}>{props.title}</Text>
            </div>
            <div className={style.body}>
                {props.children}
            </div>
        </div>
    )
}

interface SectionItemProps {
    title: string;
    content?: string | number | boolean;
    width?: string;
}

export function SectionItem(props : SectionItemProps) {
    return (
        <div className={style.item} style={{width: props.width}}>
            <Text className={style.itemTitle}>{props.title}</Text>
            <div className={style.itemContentBody}>
                <Text className={style.itemContent}>{props.content ?? 'None'}</Text>
            </div>
        </div>
    )
    
}