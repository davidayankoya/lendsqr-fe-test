import React, { MouseEventHandler, SetStateAction, useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import CaretDownIcon from 'assets/icons/caret-down.svg'
import { Text, Button, Input, Select } from 'components/UI';
import { formController, inputDateFormat } from 'utils';


interface FilterProps {
    onFilter?: Function;
    filteredSize?: number;
    totalSize?: number;
    data?: any;
    setData?: SetStateAction<any>
}

export function Filter(props: FilterProps) {
    const popRef = useRef(null)

    const [isOpenFilter, setIsOpenFilter] = useState(false)

    const controller = (e: React.FormEvent) => {
        e.preventDefault()
        formController(e, props.setData)
    }

    const handleClickOutside = (e: MouseEvent) => {
        if (popRef.current && !popRef.current.contains(e.target)) {
            setIsOpenFilter(false)
        }
    }
    const handleClick : MouseEventHandler<HTMLButtonElement> = (e) => {
        setIsOpenFilter((prev) => !prev)
    }

    const handleFilter = () => {
        props.onFilter()
        setIsOpenFilter(false)
    }
    const handleResetFilter = () => {
        props.setData({})
        setIsOpenFilter(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    })


    return (
        <div className={style.container}>
            <Text>Showing</Text>
            <Button className={style.showBtn} onClick={handleClick}>
                {props.filteredSize}
                <img src={CaretDownIcon} className={`${style.icon} ${isOpenFilter && style.iconActive}`} alt={`${props.filteredSize} out of ${props.totalSize}`} />
            </Button>
            <Text>out of {props.totalSize}</Text>

            {isOpenFilter && 
                <div className={style.popContainer} ref={popRef}>
                    <Select
                        label='Organization'
                        name='organization'
                        value={props.data.organization}
                        options={['Option 1', 'Option 2', 'Option 3']}
                        onChange={controller}
                        containerClass={style.input}
                    />
                    <Input
                        label='Username'
                        name='username'
                        value={props.data.username}
                        placeholder='User'
                        onChange={controller}
                        containerClass={style.input}
                    />
                    <Input
                        label='Email'
                        name='email'
                        value={props.data.email}
                        placeholder='Email'
                        onChange={controller}
                        containerClass={style.input}
                    />
                    <Input
                        label='Date'
                        name='date'
                        value={inputDateFormat(props.data.date)}
                        placeholder='Date'
                        type='date'
                        onChange={controller}
                        containerClass={style.input}
                    />
                    <Select
                        label='Status'
                        name='status'
                        value={props.data.status}
                        options={['Active', 'Inactive']}
                        onChange={controller}
                        containerClass={style.input}
                    />
                    <div className={style.filterBtns}>
                        <Button
                            onClick={handleResetFilter}
                            variant='outline'
                            className={style.btn}
                        >
                            Reset
                        </Button>
                        <Button
                            onClick={handleFilter}
                            className={style.btn}
                        >
                            Filter
                        </Button>
                    </div>
                </div>
            }
        </div>
    )
}