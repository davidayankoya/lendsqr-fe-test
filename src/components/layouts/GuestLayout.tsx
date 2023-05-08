import React, { LazyExoticComponent } from 'react'

interface GuestLayoutProps {
    children: React.ReactNode | LazyExoticComponent<any> | any;
}

export function GuestLayout({ children }: GuestLayoutProps) {
    return (
        <div className='app'>
            <div className='page-container'>
                <main className='guest-page-main'>
                    {children}
                </main>
            </div>
        </div>
    )
}