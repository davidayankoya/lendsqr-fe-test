import React from 'react'
import style from './index.module.scss'
import { Text } from 'components/UI'

function Home() {
    return (
        <div className={style.container}>
            <Text className={style.text}>Home Here</Text>
        </div>
    )
}

export default Home