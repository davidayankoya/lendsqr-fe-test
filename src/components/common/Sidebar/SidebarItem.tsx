import { NavLink as Link } from 'react-router-dom'
import { NavItem } from 'constants/types'
import style from './SidebarItem.module.scss'
import { Text } from 'components/UI'
import { allCaps } from 'utils'


export function SidebarItem({ name, to, icon } : NavItem) {
    return (
        <li>
            <Link to={to} className={({isActive}) => isActive ? style.activeLink : ''}>
                <div className={style.container}>
                    <img className={style.icon} src={icon} alt='link-icon'></img>
                    <Text className={style.text}>{name}</Text>
                </div>
            </Link>
        </li>
    )
}

interface SidebarItemHeadingProps {
    name: string;
    index: number;
}

export function SidebarItemHeading({ name } : SidebarItemHeadingProps) {
    return (
        <li className={style.groupHeading}>
            <Text className={style.text}>{allCaps(name)}</Text>
        </li>
    )
}