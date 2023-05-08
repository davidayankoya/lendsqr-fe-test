import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { Button, Input } from 'components/UI'
import style from './HeaderSearch.module.scss'
import { useState } from 'react'
import { formController } from 'utils'

export function HeaderSearch() {
    const [data, setData] = useState({
        search: ''
    })

    return (
        <div className={style.container}>
            <Input
                placeholder='Search for anything'
                name='search'
                onChange={(e) => formController(e, setData)}
                value={data.search}
                containerClass={style.inputContainer}
                inputClass={style.input}
            />
            <Button className={style.button}>
                <div style={{ height: '100%' }}>
                    <SearchIcon />
                </div>
            </Button>
        </div>
    )
}