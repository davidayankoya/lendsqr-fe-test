import { Text } from 'components/UI'
import React from 'react'
import { useAppSelector } from 'store/hooks'
import { ReactComponent as CaretDown } from 'assets/icons/caret-down.svg'
import style from './UserProfileToggler.module.scss'

export function UserProfileToggler() {
    const user = useAppSelector(s => s.auth.user)

    return (
        <div className={style.container}>
            <Text className={style.text}>{user?.firstName}</Text>
            <CaretDown/>
        </div>
    )
}