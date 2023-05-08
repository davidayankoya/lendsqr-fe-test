import React from 'react'
import { Navigate } from 'react-router-dom';

interface GuestWrapperProps {
    children: React.ReactNode | any;
    redirectTo: string;
}

export function GuestWrapper({ children, redirectTo }: GuestWrapperProps) {
    
    return redirectTo
        ? <Navigate to={redirectTo}/>
        : children
}