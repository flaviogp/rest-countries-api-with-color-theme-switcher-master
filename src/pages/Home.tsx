import { useEffect, useState } from "react"
import { Countries } from "../utils/types";
import Search from "../components/Search";

const Home = () => {
    const [data, setData] = useState<Countries[] | null>(null);
    useEffect( () => {      

      const fetchApi = async () => {
        try{
          const fetchData = await fetch('https://restcountries.com/v3.1/all');
          const data = await fetchData.json();
          setData(data);
        }catch(err){
          alert(err)
        }
      }

      fetchApi();

    }, [])

  return (
    <main className='container p-4'>
        <Search />
        {data && data.map(item => <img src={item.flags.png} /> )}
    </main>
  )
}

export default Home