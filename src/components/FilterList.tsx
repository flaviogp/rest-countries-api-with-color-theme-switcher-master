

type FilterListProps = {
    select: boolean
    list: string[]
    handleSelectOption: (arg: string) => void
}

const FilterList = ({handleSelectOption, list, select}: FilterListProps) => {

const selectStyles = `
    h-[215px] p-4
`
  return (
    <div 
    className={`
        w-full h-0 flex flex-col gap-4
        bg-white absolute top-[115%]
        shadow-md overflow-hidden
        my-transition [&>*]:cursor-pointer
        ${ select && selectStyles}
    `}
>
    {list.map((item, index) =>(
            <p 
                onClick={() => handleSelectOption(item)} 
                key={`${item}+${index}`}
                className="capitalize"    
            >
                {item}
            </p>
        )
    )}
</div>
  )
}

export default FilterList