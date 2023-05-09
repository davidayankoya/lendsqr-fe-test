import React, { FormEvent, useState, MouseEventHandler } from 'react'
import style from './index.module.scss'
import { Button, Input, Text } from 'components/UI'
import { ReactComponent as CompanyLogo } from 'assets/icons/company-logo.svg'
import { ReactComponent as LoginHero } from 'assets/img/sign-in-hero.svg'
import { formController } from 'utils'
import { NavLink as Link, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { login } from 'features/authSlice'
import { toast } from 'react-hot-toast'

interface LoginForm {
    email: string;
    password: string;
}

function Login() {
    const dispatch = useAppDispatch()
    const { isAuthenticated } = useAppSelector(s => s.auth)
    const [data, setData] = useState({} as LoginForm)

    const handleChange = (e: FormEvent) => {
        formController(e, setData)
    }
    const handleLogin: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (data?.email && data?.password) {
            dispatch(login(data))
        } else {
            toast('Fill in your email and password')
        }
    }

    if (isAuthenticated) {
        return <Navigate to='/users'/>
    }

    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.logo}>
                    <CompanyLogo/>
                </div>
                <div className={style.hero}>
                    <LoginHero/>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.textHeading}>
                    <Text className={style.text}>Welcome!</Text>
                </div>
                <div className={style.smallerText}>
                    <Text className={style.text}>Enter details to login.</Text>
                </div>
                <Input
                    name='email'
                    placeholder='Email'
                    type='email'
                    value={data.email}
                    onChange={handleChange}
                    inputClass={style.input}
                    containerClass={style.inputBox}
                />
                <Input
                    name='password'
                    placeholder='Password'
                    type='password'
                    value={data.password}
                    onChange={handleChange}
                    inputClass={style.input}
                    containerClass={style.inputBox}
                />
                <Link to='#' style={{width: '98%'}}>
                    <Text className={style.forgotPw}>FORGOT PASSWORD?</Text>
                </Link>
                <Button className={style.submit} onClick={handleLogin}>LOG IN</Button>
            </div>
        </div>
    )
}

export default Login