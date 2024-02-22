import { Link } from "react-router-dom"
import { Countries } from "../utils/types"

type CardProps = {
    country: Countries
}

const Card = ({country}:CardProps) => {
  return (
    <Link to={{
            pathname: `/country/${country.name.common}`,

        }}
        //             search: `?name=${country.name.common}`
        className="
            w-[90%] bg-white flex flex-col self-center 
            mb-8 rounded-md shadow-md cursor-pointer no-underline
        "
    >
        <div className=''>
            <img 
                src={country.flags.svg} 
                alt={country.flags.alt} 
                className="w-full rounded-t-md shadow-sm"/>
        </div>
        <div className="flex flex-col p-8 pb-12 gap-2 text-veryDarkBlueLM/90">
            <h2 className="mb-4 text-veryDarkBlueLM">{country.name.official}</h2>
            <p><b>population: </b>{country.population}</p>
            <p><b>region: </b>{country.region}</p>
            <p><b>capital: </b>{country.capital}</p>
        </div>
    </Link>
  )
}

export default Card