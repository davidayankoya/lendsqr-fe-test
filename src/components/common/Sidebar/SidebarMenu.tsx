import React from 'react'
import { NavItem } from 'constants/types'
import { SidebarItem, SidebarItemHeading } from './SidebarItem'

interface SidebarMenuProps {
    items: NavItem[];
}

export function SidebarMenu({ items } : SidebarMenuProps) {
    return (
        <ul>
            {items.map((item, index) => {
                return item.isGroup ? (
                    <React.Fragment key={index}>
                        <SidebarItemHeading
                            name={item.name ?? ''}
                            index={index}
                        />
                        {item.subItems?.map((e, i) =>
                            <SidebarItem
                                index={i}
                                key={i}
                                {...e}
                            />
                        )}
                    </React.Fragment>
                    ) : (
                        <SidebarItem
                            index={index}
                            key={index}
                            {...item}
                        />
                    )
                }
            )}
        </ul>
    )
}