import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'

const Filter = () => {
    const [value, setValue] = useState('Filter by region...')
    const [select, setSelect] = useState(false)

    const handleActiveSelector = () => {
        setSelect(!select);
    }
    
    const handleSelectOption = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const selectValue = e.currentTarget.innerText;
        
        setValue(selectValue)
        setSelect(!select);
    }

    const selectStyles = `
        h-[185px] p-4
    `
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

        <div 
            className={`
                w-full h-0 flex flex-col gap-4
                bg-white absolute top-[115%]
                shadow-md overflow-hidden
                my-transition [&>*]:cursor-pointer
                ${ select && selectStyles}
            `}
        >
            <p onClick={(e) => handleSelectOption(e)}>Africa</p>
            <p onClick={(e) => handleSelectOption(e)}>America</p>
            <p onClick={(e) => handleSelectOption(e)}>Asia</p>
            <p onClick={(e) => handleSelectOption(e)}>Europe</p>
            <p onClick={(e) => handleSelectOption(e)}>Oceania</p>
        </div>
    </div>

  )
}

export default Filter