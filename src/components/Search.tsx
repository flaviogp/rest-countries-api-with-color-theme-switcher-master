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
    <label htmlFor="search" 
      className=" 
        w-full h-12 max-w-[450px] mb-8 md:m-0 rounded-md 
        bg-white text-darkBlue shadow-shadowButton flex gap-5 p-4 
        dark:bg-darkBlue dark:text-white

      "
    >
        <FontAwesomeIcon icon={faSearch} />
        <input 
            type="text" 
            id='search' 
            name='search'
            placeholder="Search for a country..."
            className="outline-none border-none h-full bg-inherit text-inherit dark:placeholder-white"
          onKeyDown={e => handleKeyDown(e)}
        />
    </label>
  )
}

export default Search