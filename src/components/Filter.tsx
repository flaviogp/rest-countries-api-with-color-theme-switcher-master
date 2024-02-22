import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import FilterList from "./FilterList"

const Filter = () => {
    const [value, setValue] = useState('Filter by region...')
    const [select, setSelect] = useState(false)

    const list = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    const handleActiveSelector = () => {
        setSelect(!select);
    }
    
    const handleSelectOption = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const selectValue = e.currentTarget.innerText;
        
        setValue(selectValue)
        setSelect(!select);
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
            className="border-none outline-none max-w-[120px] cursor-pointer"
            />
            <FontAwesomeIcon icon={select ? faAngleUp : faAngleDown} />
        </div>
        <FilterList handleSelectOption={handleSelectOption} list={list} select={select}/>
    </div>

  )
}

export default Filter