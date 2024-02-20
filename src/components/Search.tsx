import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <label htmlFor="search" className="w-full bg-white flex gap-5 mb-7 p-5">
        <FontAwesomeIcon icon={faSearch} />
        <input 
            type="text" 
            id='search' 
            name='search'
            placeholder="Search for a country..."
            className="outline-none border-none "

        />
    </label>
  )
}

export default Search