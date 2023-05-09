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
import { alphaSort, dateSort } from 'utils'


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

    const [pageNumber, setPageNumber] = useState(1)
    const itemsPerPage = 10;
    const offset = pageNumber * itemsPerPage;
    const pageCount = Math.ceil(users.length / itemsPerPage);
    const paginateUsers = (users = []) => users.slice(offset, offset + itemsPerPage)
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    }
    
    const [filter, setFilter] = useState({} as FilterDataProps)
    const [state, setState] = useState({ sortBy: '' })
    
    const sortData = (key: string) => {
        setState((prev) => ({ ...prev, sortBy: key }))
    }
    const localFilter = (arr = [], sortKey: string) => {
        let newArr = arr.filter(c =>
            Object.keys(filter).every(e => filter[e] === '' ? true : c[e] === filter[e])
        )
        if (sortKey.includes('date')) {
            newArr = dateSort(newArr, sortKey)
        } else {
            newArr = alphaSort(newArr, sortKey)
        }
        return paginateUsers(newArr)
    }

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
                filtered={localFilter(users, state.sortBy)}
                onSort={sortData}
            />
            
            <div className={style.footer}>
                <Filter
                    onFilter={() => {}}
                    filteredSize={localFilter(users, state.sortBy).length}
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