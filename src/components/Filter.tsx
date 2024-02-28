import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import FilterList from "./FilterList"
import { SearchParam } from "../pages/Home"

type FilterProps = {
    handleSetFilter: (param: SearchParam ,arg:string) => void
}

const Filter = ({handleSetFilter}: FilterProps) => {
    const [value, setValue] = useState('Filter by region...')
    const [select, setSelect] = useState(false)

    const list = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania'];

    const handleActiveSelector = () => {
        setSelect(!select);
    }
    
    const handleSelectOption = (item: string) => {
        
        setValue(item)
        setSelect(!select);
        handleSetFilter( 'region' ,item)
    }


  return (
    <div
        className="
            flex flex-col items-center justify-center
            w-[230px] mb-8 relative
        "
    >
        <div 
            className="
                cursor-pointer bg-white 
                flex items-center justify-center gap-4 
                p-4 w-full rounded-sm shadow-md

            "
            onClick={() => handleActiveSelector()}
        >
            <input 
            type="text"
            placeholder={value}
            readOnly
            className="capitalize border-none outline-none max-w-[120px] cursor-pointer"
            />
            <FontAwesomeIcon icon={select ? faAngleUp : faAngleDown} />
        </div>
        <FilterList handleSelectOption={handleSelectOption} list={list} select={select}/>
    </div>

  )
}

export default Filter