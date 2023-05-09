import { PageHeading } from 'components/common/PageHeading'
import { useMemo, useState } from 'react'
import { Filter, StatBox, UsersTable }  from './components'
import UsersIcon from 'assets/icons/stat-users.svg'
import ActiveUsersIcon from 'assets/icons/stat-active-users.svg'
import UsersWithLoansIcon from 'assets/icons/stat-users-with-loans.svg'
import UsersWithSavingsIcon from 'assets/icons/stat-users-with-savings.svg'
import style from './Page.module.scss'
import { useAppSelector } from 'store/hooks'
import { Pagination } from 'components/UI'
import { alphaSort, dateSort, momentDate } from 'utils'


interface FilterDataProps { 
    organization: string;
    username: string;
    email: string;
    date: string;
    phone: string;
    status: string;
}

function Page() {
    const users = useAppSelector(s => s.users.data)

    const [pageNumber, setPageNumber] = useState(0)
    const itemsPerPage = 10;
    const offset = pageNumber * itemsPerPage;
    const paginateUsers = (users = []) => users.slice(offset, offset + itemsPerPage)
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    }
    
    const [filter, setFilter] = useState({} as FilterDataProps)
    const [state, setState] = useState({ sortBy: '' })
    
    const sortData = (key: string) => {
        setState((prev) => ({ ...prev, sortBy: key }))
    }
    // const localFilter = (arr = [], sortKey: string) => {
    //     let newArr = arr.filter(c =>
    //         Object.keys(filter).every(e =>
    //             filter[e] === '' ? true :
    //                 ['userName', 'email'].includes(e) ? String(c[e]).toLowerCase().startsWith(String(filter[e]).toLowerCase()) :
    //                 e === 'lastActiveDate' ? momentDate(c[e]) === momentDate(filter[e]) :
    //                 c[e] === filter[e]
    //                 )
    //                 )
    //                 if (sortKey === 'lastActiveDate') {
    //                     newArr = dateSort(newArr, sortKey)
    //                 } else if (!!sortKey) {
    //                     newArr = alphaSort(newArr, sortKey)
    //     }
    //     console.log(newArr)
    //     return paginateUsers(newArr)
    // }
    const filteredUsers = useMemo(() => {
        let newArr = users.filter(c =>
            Object.keys(filter).every(e =>
                filter[e] === '' ? true :
                ['userName', 'email'].includes(e) ? String(c[e]).toLowerCase().startsWith(String(filter[e]).toLowerCase()) :
                e === 'lastActiveDate' ? momentDate(c[e]) === momentDate(filter[e]) :
                c[e] === filter[e]
            )
        )
        if (state.sortBy === 'lastActiveDate') {
            newArr = dateSort(newArr, state.sortBy)
        } else if (!!state.sortBy) {
            newArr = alphaSort(newArr, state.sortBy)
        }
        return paginateUsers(newArr)
    }, [state.sortBy, users, filter])

    const pageCount = Math.ceil((Object.keys(filter).length > 0 ? filteredUsers.length : users.length) / itemsPerPage);

    const stats = useMemo(() => {
        return {
            totalUsers: users.length,
            totalActiveUsers: users.filter(e => e.status === 'Active').length,
            totalUsersWithLoans: 0,
            totalUsersWithSavings: 0,
        }
    }, [users])


    return (
        <div className={`${style.container} scroll-custom`}>
            <PageHeading title='Users' />

            <div className={`${style.stats} scroll-custom`}>
                <StatBox
                    icon={UsersIcon}
                    title='USERS'
                    data={stats.totalUsers}
                />
                <StatBox
                    icon={ActiveUsersIcon}
                    title='ACTIVE USERS'
                    data={stats.totalActiveUsers}
                />
                <StatBox
                    icon={UsersWithLoansIcon}
                    title='USERS WITH LOANS'
                    data={stats.totalUsersWithLoans}
                />
                <StatBox
                    icon={UsersWithSavingsIcon}
                    title='USERS WITH SAVINGS   '
                    data={stats.totalUsersWithSavings}
                />
            </div>

            <UsersTable
                users={users}
                filtered={filteredUsers}
                onSort={sortData}
            />
            
            <div className={style.footer}>
                <Filter
                    onFilter={() => {}}
                    filteredSize={filteredUsers.length}
                    totalSize={users.length}
                    data={filter}
                    setData={setFilter}
                />
                <Pagination
                    onPageChange={handlePageChange}
                    pageCount={pageCount}
                />
            </div>
        </div>
    )
}

export default Page