// import { useEffect, useState } from "react"
import { Countries } from "../utils/types";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import Countrylist from "../components/CountryList";

export type SearchParam = 'country' | 'region';

const Home = () => {
  const [filter, setFilter] = useState('all')
  const {data, loading} = useFetch<Countries[]>(filter)

  const handleSetFilter = (param: SearchParam, arg: string) => {
    if(param == 'region'){
      arg === 'all' ? setFilter(arg) : setFilter(`region/${arg}`)
    }else if(param == 'country'){
      setFilter(`name/${arg}`)
    }
  };

  return (
    <main className='container p-4 flex flex-col'>
        <Search handleSetFilter={handleSetFilter}/>
        <Filter handleSetFilter={handleSetFilter}/>
        <Countrylist data={data} loading={loading}/>
    </main>
  )
}

export default Home