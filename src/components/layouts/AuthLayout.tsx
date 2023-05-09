import React, { LazyExoticComponent } from 'react'
import SidebarNav from './navs/desktop/SidebarNav'
import NavHeader from './navs/desktop/NavHeader'
import { SidebarMenu } from 'components/common/Sidebar'
import { Header } from 'components/common/Header'
import navItems from 'constants/navigation'

interface AuthLayoutProps {
    children: React.ReactNode | LazyExoticComponent<any> | any;
}

export function AuthLayout({ children }: AuthLayoutProps) {

    return (
        <div className='app'>
            <div className='page-container'>
                <NavHeader>
                    <Header/>
                </NavHeader>
                <div className='page-body'>
                    <SidebarNav>
                        <SidebarMenu items={navItems} />
                    </SidebarNav>
                    <main className='page-main scroll-custom'>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}