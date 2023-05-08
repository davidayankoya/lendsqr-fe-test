import React, { useEffect } from 'react'
import {Navigate} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { checkAuth } from 'features/authSlice'

interface AuthWrapperProps {
    children: React.ReactNode | any;
    redirectTo: string;
}

export function AuthWrapper({ children, redirectTo }: AuthWrapperProps) {
    const { user, isAuthenticated } = useAppSelector(s => s.auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(checkAuth())
        }
    }, [dispatch, isAuthenticated, user])

    return isAuthenticated
        ? children
        : <Navigate to={redirectTo}/>;
}