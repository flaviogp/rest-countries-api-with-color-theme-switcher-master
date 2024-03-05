import { SearchParam } from "../pages/Home"
import Filter from "./Filter"
import Search from "./Search"

type SearchSectionProps = {
    handleSetFilter: (param: SearchParam ,arg:string) => void
}

const SearchSection = ({handleSetFilter}:SearchSectionProps) => {
  return (
    <section className="w-full flex flex-wrap justify-between">
        <Search handleSetFilter={handleSetFilter}/>
        <Filter handleSetFilter={handleSetFilter}/>
    </section>
  )
}

export default SearchSection