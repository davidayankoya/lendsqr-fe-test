import { Text } from 'components/UI'
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { ReactComponent as CaretDown } from 'assets/icons/caret-down.svg'
import style from './UserProfileToggler.module.scss'
import { logout } from 'features/authSlice'

export function UserProfileToggler() {
    const user = useAppSelector(s => s.auth.user)
    const dispatch = useAppDispatch()

    const logoutUser = () => {
        dispatch(logout())
    }

    const popRef = useRef(null)

    const [isOpenPopup, setIsOpenPopup] = useState(false)

    const handleClickOutside = (e: MouseEvent) => {
        if (popRef.current && !popRef.current.contains(e.target)) {
            setIsOpenPopup(false)
        }
    }
    const handleClick : MouseEventHandler<HTMLDivElement> = (e) => {
        setIsOpenPopup((prev) => !prev)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    })

    return (
        <div className={style.container} onClick={handleClick} ref={popRef}>
            <Text className={style.text}>{user?.firstName}</Text>
            <CaretDown/>
            {isOpenPopup &&
                <div className={style.popupContainer}>
                    <Text onClick={logoutUser} className={style.popupItem}>Log Out</Text>
                </div>
            }
        </div>
    )
}