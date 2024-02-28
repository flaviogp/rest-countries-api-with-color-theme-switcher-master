// import { useEffect, useState } from "react"
import { Countries } from "../utils/types";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useFetch } from "../utils/useFetch";
import { useState } from "react";

const Home = () => {
  const [filter, setFilter] = useState('all')
  const {data, loading} = useFetch<Countries[]>(filter)

  const handleSetFilter = (arg: string) => arg === 'all' ? setFilter(arg) : setFilter(`region/${arg}`);

  return (
    <main className='container p-4 flex flex-col'>
        <Search />
        <Filter handleSetFilter={handleSetFilter}/>
        <div>{loading && 'loading...'}</div>
        {data && data.map(country => <Card key={country.cca2} country={country} /> )}
    </main>
  )
}

export default Home