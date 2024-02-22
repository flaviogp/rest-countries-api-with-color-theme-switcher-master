import { useEffect, useState } from "react"
import { Countries } from "../utils/types";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Card from "../components/Card";

const Home = () => {
    const [data, setData] = useState<Countries[] | null>(null);
    useEffect( () => {      

      const fetchApi = async () => {
        try{
          const fetchData = await fetch('https://restcountries.com/v3.1/all');
          const data = await fetchData.json();
          setData(data);
          localStorage.setItem('data', JSON.stringify(data));
        }catch(err){
          alert(err)
        }
      }

      fetchApi();

    }, [])

  return (
    <main className='container p-4 flex flex-col'>
        <Search />
        <Filter />
        {data && data.map(country => <Card country={country}/> )}
    </main>
  )
}

export default Home