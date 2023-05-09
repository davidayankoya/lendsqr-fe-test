import React, { useEffect } from 'react'
import Page from './Page'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { listUsers } from 'features/usersSlice';
import { PageLoadWrapper } from 'components/common/PageLoadWrapper';

function Index() {
    const dispatch = useAppDispatch()
    const { data: users, loading } = useAppSelector(s => s.users)

    useEffect(() => {
        if (users.length === 0) {
            dispatch(listUsers())
        }
    // eslint-disable-next-line
    }, []);

    return (
        <PageLoadWrapper isLoading={[!loading]}>
            <Page/>
        </PageLoadWrapper>
    )
}

export default Index