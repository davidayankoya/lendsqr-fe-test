import React, { FormEventHandler, SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    containerClass: string;
    inputClass: string;
    labelClass: string;
    customContainerClass: string;
    customInputClass: string;
    optionsClass: string;
    label?: string;
    name?: string,
    onChange?: FormEventHandler<HTMLSelectElement>;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    options: string[] | number[];
    displayValues?: string[] | number[];
    value: string | number;
}

function Select(props: SelectProps) {
    return (
        <div className={`${props.customContainerClass} ${props.containerClass}`}>
            <label className={props.labelClass}>{props.label}</label>
            <select
                className={`${props.customInputClass} ${props.inputClass}`}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                disabled={props.disabled}
            >
                <option className={props.optionsClass} value=''>{props.placeholder ?? 'Select'}</option>
                {props.options.map((option, index) =>
                    <option className={props.optionsClass} key={index} value={option}>{option}</option>
                )}
            </select>
        </div>
    )
}

export default Select