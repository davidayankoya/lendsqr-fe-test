import React, { FormEventHandler, InputHTMLAttributes, useState } from 'react'
import CommonInput from 'components/common/Input'
import style from './Input.module.scss'
import { Text } from '../Text'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputClass?: string;
    containerClass?: string;
    label?: string;
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    type?: string;
    onChange?: FormEventHandler<HTMLInputElement>;
    value: string | number;
}

export function Input(props: InputProps) {
    const [isPassword, setIsPassword] = useState(props.type === 'password' ?? false)

    const togglePassword = () => {
        setIsPassword((prev) => (!prev))
    }
    const toggleType = () => {
        if (props.type === 'password') {
            return isPassword ? 'password' : 'text'
        } else {
            return props.type
        }
    }

    return (
        <CommonInput
            containerClass={props.containerClass}
            inputClass={props.inputClass}
            labelClass={style.label}
            customContainerClass={style.container}
            customInputClass={style.input}
            {...props}
            type={toggleType()}
        >
            {props.type === 'password' &&
                <Text
                    className={style.pwToggle}
                    onClick={togglePassword}
                >
                    {isPassword ? 'SHOW' : 'HIDE'}</Text>
            }
        </CommonInput>
    )
}