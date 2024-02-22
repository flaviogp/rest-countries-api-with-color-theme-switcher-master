

type FilterListProps = {
    select: boolean
    list: string[]
    handleSelectOption: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
}

const FilterList = ({handleSelectOption, list, select}: FilterListProps) => {

const selectStyles = `
    h-[185px] p-4
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
    {list.map(item => <p onClick={(e) => handleSelectOption(e)}>{item}</p>)}
</div>
  )
}

export default FilterList