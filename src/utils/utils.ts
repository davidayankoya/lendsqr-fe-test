import moment from 'moment'

export function allCaps(text: string) {
    return String(text).toUpperCase()
}
export function momentDate(date = '') {
    return date === '' ? date : moment(date ?? '').format('YYYY-MM-DD') 
}
export function inputDateFormat(date = '') {
    return date ? moment(date).format("YYYY-MM-DD") : '' 
}
export function prettyDateFormat(date = '') {
    return date ? moment(date).format("ll") : '' 
}


const compareAlpha = (a: any, b: any) => {
    const nameA = String(a).toUpperCase();
    const nameB = String(b).toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}

export const alphaSort = (arr = [], keyToCompare: string) => {
    return arr.sort((a: any, b: any) => compareAlpha(!!keyToCompare ? a[keyToCompare] : a, !!keyToCompare ? b[keyToCompare] : b))
}
export const numSort = (arr = [], keyToCompare: string, order?: string) => {
    if (order === 'asc') {
        return arr.sort((a: any, b: any) => ((keyToCompare ? a[keyToCompare] : a) - (keyToCompare ? b[keyToCompare] : b)))
    } else {
        return arr.sort((a: any, b: any) => ((keyToCompare ? b[keyToCompare] : b) - (keyToCompare ? a[keyToCompare] : a)))
    }
}
export const dateSort = (arr = [], key: string, order?: string) => {
    if (order === 'desc') {
        return arr.sort((a: any, b: any) => Number(moment(b[key]).format('X')) - Number(moment(a[key]).format('X')))
    } else {
        return arr.sort((a: any, b: any) => Number(moment(a[key]).format('X')) - Number(moment(b[key]).format('X')))
    }
}


export function formController(e: React.FormEvent, setData: React.Dispatch<React.SetStateAction<any>>) {
    e?.preventDefault()
    const { name, value, type } = e.target as HTMLButtonElement

    if (type === 'number') {
        setData((prev: any) => ({ ...prev, [name]: Number(value) === 0 ? 0 : Number(value) }));
    } else if (type === 'select-one') {
        setData((prev: any) => ({ ...prev, [name]: value }));
    } else if(type === 'checkbox' ) {
        setData((prev: any) => ({ ...prev, [name]: !prev[name] }));
    } else if(type === 'radio' ) {
        setData((prev: any) => ({ ...prev, [name]: value }));
    } else if(type === 'date') {
        setData((prev: any) => ({ ...prev, [name]: momentDate(value) }));
    } else {
        setData((prev: any) => ({ ...prev, [name]: value }));
    }
}