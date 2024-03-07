
import { useEffect, useState } from "react";


export function useFetch<T = unknown>(urlString: string) {
    const [data, setData] = useState<T | null>(null);
    const [singleData, setSingleData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/${urlString}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
                setSingleData(res[0])
            })
            .catch(err => {
                setError(err)
                console.log('err:' + err)
            })
            .finally(() => setLoading(false))
    }, [urlString]);

    return {
        data,
        loading,
        error,
        singleData
    }
}