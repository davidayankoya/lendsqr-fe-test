import { Button, Text } from 'components/UI'
import React from 'react'
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate()
    
    return (
        <div className={style.container}>
            <div className={style.body}>
                <Text className={style.largeText}>404: Oops</Text>
                <Text className={style.smallText}>Page does not exist. Let's go back home.</Text>
                <Button className={style.btn} onClick={() => navigate('/')}>Go Home</Button>
            </div>
        </div>
    )
}

export default ErrorPage