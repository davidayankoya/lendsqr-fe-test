import { Text } from 'components/UI'
import style from './index.module.scss'
import React from 'react';

interface PageLoadWrapperProps {
    children: React.ReactNode;
    isLoading: boolean[];
}

export function PageLoadWrapper({ children, isLoading } : PageLoadWrapperProps) {
    return (isLoading.some(e => e === false) ? 
        <div className={style.container}>
            <Text className={style.text}>Loading..</Text>
        </div> :
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}