import React, { useEffect } from 'react'
import Page from './Page'
import { useAppDispatch } from 'store/hooks';
import { listUsers } from 'features/usersSlice';

function Index() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch]);

    return (
        <React.Fragment>
            <Page/>
        </React.Fragment>
    )
}

export default Index