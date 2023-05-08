import React, { FormEventHandler, SelectHTMLAttributes } from 'react'
import CommonSelect from 'components/common/Select'
import style from './Select.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    inputClass?: string;
    containerClass?: string;
    label?: string;
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    type?: string;
    onChange?: FormEventHandler<HTMLSelectElement>;
    options: string[] | number[];
    displayValues?: string[] | number[];
    value: string | number;
}

export function Select(props: SelectProps) {
    return (
        <CommonSelect
            containerClass={props.containerClass}
            inputClass={props.inputClass}
            labelClass={style.label}
            optionsClass={style.options}
            customContainerClass={style.container}
            customInputClass={style.select}
            {...props}
        />
    )
}