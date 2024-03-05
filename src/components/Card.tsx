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
        className="
            w-[300px] h-[400px] bg-white flex flex-col
            rounded-md shadow-md cursor-pointer no-underline
        "
    >
        <div className='w-full h-[160px]'>
            <img 
                src={country.flags.svg} 
                alt={country.flags.alt} 
                style={{ objectFit: "cover" }}
                className=" w-full h-full rounded-t-md shadow-sm"
                />
        </div>
        <div className="flex flex-col p-8 gap-2 text-veryDarkBlueLM/90">
            <h2 className="mb-4 text-veryDarkBlueLM">{country.name.official}</h2>
            <p><b>population: </b>{country.population}</p>
            <p><b>region: </b>{country.region}</p>
            <p><b>capital: </b>{country.capital}</p>
        </div>
    </Link>
  )
}

export default Card