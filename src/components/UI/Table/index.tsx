import React, { MouseEventHandler } from 'react'
import style from './index.module.scss'
import SortIcon from 'assets/icons/sort.svg'
import { Text } from '../Text';
import { Menu } from '../Menu';

interface TableProps {
    headings: string[] | { name: string; key: string }[];
    children?: React.ReactNode;
    containerClass?: string;
    onClickHeading?: Function;
}

export function Table(props: TableProps) {
    const handleClick = (value) => {
        props.onClickHeading(value)
    }

    return (
        <div className={`${style.container} ${props.containerClass} scroll-custom`}>
            <table className={style.table}>
                <thead>
                    <tr>
                        {props.headings.map((heading, index) => (heading.name === '' ? '' : 
                            <th key={index} className={style.headCellBody}>
                                <div className={style.headCell} onClick={(e) => handleClick(heading['key'])}>
                                    <Text className={style.headCellText}>{heading.name}</Text>
                                    <img src={SortIcon} alt='sort by'/>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                {props.children &&
                    <tbody className={style.body}>{props.children}</tbody>
                }
            </table>
        </div>
    )
}

interface TableRowProps {
    data: string[] | React.ReactNode[];
    onClick?: MouseEventHandler<HTMLTableRowElement>;
    index?: number;
    options?: any[];
    rowClass?: string;
}

export function TableRow(props: TableRowProps) {
    return (
        <tr onClick={props.onClick} className={`${style.bodyRow} ${props.rowClass}`}>
            {props.data.map((e, i, arr) => (
                <td key={i}>
                    <div className={style.bodyCell}>
                        <Text className={style.bodyCellText}>{e}</Text>
                    </div>
                </td>
            ))}
            {props.options &&
                <td key={props.data.length - 1} className={style.options}>
                    <Menu options={props.options}/>
                </td>}
        </tr>
    )
}