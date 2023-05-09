import { ReactComponent as CompanyLogo } from 'assets/icons/company-logo.svg'
import { ReactComponent as NotificationBell } from 'assets/icons/notification-bell.svg'
import UserAvatar from 'assets/img/user-avatar.png'
import MenuButton from 'assets/icons/menu.svg'
import { HeaderSearch } from './components/HeaderSearch'
import { UserProfileToggler } from './components/UserProfileToggler'
import { Link } from 'react-router-dom'
import { Text } from 'components/UI'
import style from './index.module.scss'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { toggleSidebar } from 'features/uiSlice'


export function Header() {
    const dispatch = useAppDispatch()
    const isOpenSidebar = useAppSelector(s => s.ui.isOpenSidebar)
    const onToggleSidebar = (value: boolean) => {
        dispatch(toggleSidebar(!value))
    }

    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.menuBtn} onClick={() => onToggleSidebar(isOpenSidebar)}>
                    <img className={style.menuBtnIcon} src={MenuButton} alt='menu button' />
                </div>
                <div className={style.logo}>
                    <Link to='/'>
                        <CompanyLogo/>
                    </Link>
                </div>
                <div className={style.search}>
                    <HeaderSearch/>
                </div>
            </div>
            <div className={style.right}>
                <Link to='/docs'>
                    <Text className={style.linkText}>
                        Docs
                    </Text>
                </Link>
                <div className={style.notification}>
                    <NotificationBell/>
                </div>
                <div className={style.profilePic}>
                    <img src={UserAvatar} alt='User Avatar'/>
                </div>
                <div className={style.profileName}>
                    <UserProfileToggler/>
                </div>
            </div>
        </div>
    )
}