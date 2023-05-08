import { ReactComponent as CompanyLogo } from 'assets/icons/company-logo.svg'
import { ReactComponent as NotificationBell } from 'assets/icons/notification-bell.svg'
import UserAvatar from 'assets/img/user-avatar.png'
import { HeaderSearch } from './components/HeaderSearch'
import { UserProfileToggler } from './components/UserProfileToggler'
import { Link } from 'react-router-dom'
import { Text } from 'components/UI'
import style from './Header.module.scss'

export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.left}>
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
                <Text className={style.linkText}>
                    <Link to='#'>
                        Docs
                    </Link>
                    </Text>
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