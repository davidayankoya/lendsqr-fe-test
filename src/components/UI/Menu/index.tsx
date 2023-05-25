import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import ThreeEllipses from 'assets/icons/three-ellipses.svg'
import { Text } from '../Text';

interface MenuProps {
    options?: { name: string; icon?: string; onUse: MouseEventHandler<HTMLDivElement>; disabled?: boolean; }[];
}

export function Menu(props: MenuProps) {
    const [isOpen, setIsOpen] = useState(false)
    const popRef = useRef(null)

    const handleOpen : MouseEventHandler<HTMLDivElement> = (e) => {
        setIsOpen(true)
    }
    const handleClickOutside = (e: MouseEvent) => {
        if (popRef.current && !popRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }
    const handleUseOption = (e, func) => {
        e.stopPropagation();
        func();
        setIsOpen(() => false);
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    })

    return (
        <div className={style.container} onClick={handleOpen}>
            <img src={ThreeEllipses} alt='menu options' className={style.optionsBtn} />

            {isOpen &&
                <div className={style.popContainer} ref={popRef}>
                    {props.options && props.options.map((option, index) => (
                        <div className={style.option} onClick={(e) => handleUseOption(e, option.onUse)} key={index}>
                            <img src={option.icon} alt='menu option' className={style.icon} />
                            <Text className={style.text}>{option.name}</Text>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}