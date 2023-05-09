import React from 'react'
import style from './index.module.scss'
import { Table, TableRow, Text } from 'components/UI'
import EyeIcon from 'assets/icons/eye.svg'
import CancelUserIcon from 'assets/icons/cancel-user.svg'
import CheckUserIcon from 'assets/icons/check-user.svg'
import { prettyDateFormat } from 'utils'
import { useNavigate } from 'react-router-dom'
import { Customer } from 'constants/types'
import { updateUser } from 'features/usersSlice'
import { useAppDispatch } from 'store/hooks'
import { toast } from 'react-hot-toast'
const tableFields = [
    { name: 'ORGANIZATION', key: 'orgName'},
    { name: 'USERNAME', key: 'userName'},
    { name: 'EMAIL', key: 'email'},
    { name: 'PHONE NUMBER', key: 'phoneNumber'},
    { name: 'LAST ACTIVE', key: 'lastActiveDate'},
    { name: 'STATUS', key: 'status' },
    { name: '', key: '' },
]


interface UsersTableProps {
    users: Customer[];
    filtered: Customer[];
    onSort: Function;
}

export function UsersTable(props: UsersTableProps) {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
        
    const toggleBlacklistUser = (user) => {
        dispatch(updateUser([user.id, { ...user, isBlacklisted: !user.isBlacklisted }]))
        toast.success('User Blacklisted!', { duration: 4000 })
    } 
    const toggleActivateUser = (user) => {
        dispatch(updateUser([user.id, { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }]))
        toast.success(`User ${user.status === 'Active' ? 'Deactivated' : 'Activated'!}`, { duration: 4000 })
    }
    

    return (
        <Table
            headings={tableFields}
            onClickHeading={(key: string) => props.onSort(key)}
            isEmpty={props.filtered.length === 0}
        >
            {props.filtered.map((user, index) => (
                <TableRow
                    data={tableFields.map(e => e.key === 'lastActiveDate' ? prettyDateFormat(user[e.key]) : user[e.key])}
                    rowClass={user.isBlacklisted ? style.blacklist : user.status === 'Inactive' ? style.inactive : ''}
                    key={index}
                    options={[
                        {
                            name: 'View Details',
                            icon: EyeIcon,
                            onUse: () => navigate(`/users/${user.id}`),
                        },
                        {
                            name: user.isBlacklisted ? 'Remove from Blacklist' : 'Blacklist User',
                            icon: CancelUserIcon,
                            onUse: () => toggleBlacklistUser(user),
                        },
                        {
                            name: user.status === 'Active' ? 'Deactivate User' : 'Activate User',
                            icon: CheckUserIcon,
                            onUse: () => toggleActivateUser(user),
                        },
                    ]}
                />
            ))}
            {props.filtered.length === 0 && <Text className={style.emptyList}>No users found</Text> }
        </Table>
    )
}