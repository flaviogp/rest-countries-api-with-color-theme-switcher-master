import { useParams } from "react-router-dom"
import { Countries } from "../utils/types"
import BackButton from "../components/BackButton"

const Country = () => {
    const {name} = useParams()
    const data = JSON.parse(localStorage.getItem('data') as string) as Countries[]
    const country = data.find(country => country.name.common === name)
    if(!country) return;
  return (
    <main className='container p-4 flex flex-col'>
      <BackButton />
       <p> Country: {country.name.common}</p>

    </main>
  )
}

export default Country