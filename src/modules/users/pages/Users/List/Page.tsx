import { PageHeading } from 'components/common/PageHeading'
import React, { useMemo, useState } from 'react'
import { Filter, StatBox }  from './components'
import UsersIcon from 'assets/icons/stat-users.svg'
import ActiveUsersIcon from 'assets/icons/stat-active-users.svg'
import UsersWithLoansIcon from 'assets/icons/stat-users-with-loans.svg'
import UsersWithSavingsIcon from 'assets/icons/stat-users-with-savings.svg'
import EyeIcon from 'assets/icons/eye.svg'
import CancelUserIcon from 'assets/icons/cancel-user.svg'
import CheckUserIcon from 'assets/icons/check-user.svg'
import style from './Page.module.scss'
import { Table, TableRow, Tag } from 'components/UI'
import { alphaSort, dateSort, prettyDateFormat } from 'utils'
import { updateUser } from 'features/usersSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { useNavigate } from 'react-router-dom'

const tableFields = [
    { name: 'ORGANIZATION', key: 'orgName'},
    { name: 'USERNAME', key: 'userName'},
    { name: 'EMAIL', key: 'email'},
    { name: 'PHONE NUMBER', key: 'phoneNumber'},
    { name: 'LAST ACTIVE', key: 'lastActiveDate'},
    { name: 'STATUS', key: 'status' },
    { name: '', key: '' },
]
// const StatusTag = (value: string) => {
//     const tagClass = value === 'Active' ? style.activeTag : value === 'Inactive' ? style.inactiveTag : ''  

//     return (
//         <Tag containerClass={tagClass}>{value}</Tag>
//     )
// }


interface FilterDataProps { 
    organization: string;
    username: string;
    email: string;
    date: string;
    phone: string;
    status: string;
}

function Page() {
    const dispatch = useAppDispatch()
    const users = useAppSelector(s => s.users.data)
    const navigate = useNavigate()

    const [state, setState] = useState({
        sortBy: ''
    })
    const [filter, setFilter] = useState({} as FilterDataProps)

    const sortData = (key: string) => {
        setState((prev) => ({ ...prev, sortBy: key }))
    }
    const localFilter = (arr = [], sortKey: string) => {
        let newArr = arr.filter(c =>
            Object.keys(filter).every(e => c[e] === filter[e])
        )
        if (sortKey.includes('date')) {
            return dateSort(newArr, sortKey)
        } else {
            return alphaSort(newArr, sortKey)
        }
    }
    const totalUsers = useMemo(() => users.length, [users])
    const totalActiveUsers = useMemo(() => users.filter(e => e.status === 'Active').length, [users])
    const totalUsersWithLoans = useMemo(() => 0, [])
    const totalUsersWithSavings = useMemo(() => 0, [])
    
    const toggleBlacklistUser = (user) => {
        dispatch(updateUser([user.id, { ...user, isBlacklisted: !user.isBlacklisted }] ))
    } 
    const toggleActivateUser = (user) => {
        dispatch(updateUser([user.id, { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }] ))
    }


    return (
        <div className={`${style.container} scroll-custom`}>
            <PageHeading title='Users' />
            <div className={style.stats}>
                <StatBox
                    icon={UsersIcon}
                    title='USERS'
                    data={totalUsers}
                />
                <StatBox
                    icon={ActiveUsersIcon}
                    title='ACTIVE USERS'
                    data={totalActiveUsers}
                />
                <StatBox
                    icon={UsersWithLoansIcon}
                    title='USERS WITH LOANS'
                    data={totalUsersWithLoans}
                />
                <StatBox
                    icon={UsersWithSavingsIcon}
                    title='USERS WITH SAVINGS   '
                    data={totalUsersWithSavings}
                />
            </div>
            <Table
                headings={tableFields}
                onClickHeading={(key: string) => sortData(key)}
            >
                {localFilter(users, state.sortBy).map((user, index) => (
                    <TableRow
                        data={tableFields.map(e => e.key === 'lastActiveDate' ? prettyDateFormat(user[e.key]) : user[e.key])}
                        rowClass={user.isBlacklisted ? style.blacklist : user.status === 'Inactive' ? style.inactive : ''}
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
                        key={index}
                    />
                ))}
            </Table>
            <div className={style.footer}>
                <Filter
                    onFilter={() => {}}
                    filteredSize={3}
                    totalSize={10}
                    data={filter}
                    setData={setFilter}
                />
            </div>
        </div>
    )
}

export default Page