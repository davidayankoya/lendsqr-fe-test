import React, { FormEventHandler, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    containerClass: string;
    inputClass?: string;
    labelClass: string;
    customContainerClass?: string;
    customInputClass?: string;
    label?: string;
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    type?: string;
    onChange?: FormEventHandler<HTMLInputElement>;
    value: string | number;
    children?: React.ReactNode;
}

function Input(props: InputProps) {
    return (
        <div className={`${props.customContainerClass} ${props.containerClass}`}>
            {props.label && <label className={props.labelClass}>{props.label}</label>}
            <input
                className={`${props.customInputClass} ${props.inputClass} `}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                disabled={props.disabled}
                readOnly={props.readOnly}
                placeholder={props.placeholder}
                type={props.type}
            />
            {props.children}
        </div>
    )
}

export default Input