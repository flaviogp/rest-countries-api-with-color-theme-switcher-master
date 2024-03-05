import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { SearchParam } from "../pages/Home"

type SearchProps = {
  handleSetFilter: (param: SearchParam ,arg:string) => void
}

const Search = ({handleSetFilter}: SearchProps) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key !== 'Enter') return;

    handleSetFilter('country', e.currentTarget.value)
  }

  return (
    <label htmlFor="search" className=" w-full md:w-[450px] rounded-md bg-white flex gap-5 mb-7 p-5">
        <FontAwesomeIcon icon={faSearch} />
        <input 
            type="text" 
            id='search' 
            name='search'
            placeholder="Search for a country..."
            className="outline-none border-none "
          onKeyDown={e => handleKeyDown(e)}
        />
    </label>
  )
}

export default Search