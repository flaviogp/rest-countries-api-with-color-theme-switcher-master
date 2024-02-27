// import { useEffect, useState } from "react"
import { Countries } from "../utils/types";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useFetch } from "../utils/useFetch";

const Home = () => {
  const {data, loading} = useFetch<Countries[]>('all')
  return (
    <main className='container p-4 flex flex-col'>
        <Search />
        <Filter />
        <div>{loading && 'loading...'}</div>
        {data && data.map(country => <Card key={country.cca2} country={country} /> )}
    </main>
  )
}

export default Home