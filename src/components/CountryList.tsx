import React from 'react'
import Card from './Card'
import { Countries } from '../utils/types'

type CountryListProps = {
    data: Countries[] | null;
    loading: boolean;
}

const Countrylist = ({data, loading}: CountryListProps) => {
  return (
    <>
    {
        <div>
            {data && data.map(country => <Card key={country.cca2} country={country} /> )}
        </div>
    }
    </>
  )
}

export default Countrylist