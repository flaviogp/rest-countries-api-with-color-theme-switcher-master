
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Countries } from '../utils/types'

type BorderLinkProps = {
    code: string
}

const BorderLink = ({ code }: BorderLinkProps) => {
    const [country, setCountry] = useState<string | null>('');

    const {singleData} = useFetch<Countries>(`alpha?codes=${code}`)

    useEffect(()=>{
        setCountry(singleData && singleData.name.common)
    },[singleData])


    return (
        <Link
            to={{
                pathname: `/country/${country}`
            }}
            className='no-underline p-2 px-5 rounded-md shadow-shadowButton shadow-veryDarkBlueLM text-veryDarkBlueLM'
        >
            {country}
        </Link>
    )
}

export default BorderLink