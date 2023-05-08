import React from 'react'
import style from './index.module.scss'
import CaretLeftIcon from 'assets/icons/caret-left.svg'
import CaretRightIcon from 'assets/icons/caret-right.svg'
import { Text } from '../Text';

interface PaginationProps {
    onPageChange?: Function;
    pageNumber?: number;
}

export function Pagination(props: PaginationProps) {

    return (
        <div className={style.container}>
            
        </div>
    )
}