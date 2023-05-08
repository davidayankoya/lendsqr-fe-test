import { Text } from 'components/UI'
import style from './index.module.scss'

export function Loader() {
    return (
        <div className={style.container}>
            <Text className={style.text}>Loading..</Text>
        </div>
    )
}