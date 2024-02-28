import { Countries } from "../utils/types"

type BannerProps = {
    data: Countries;
}

const Banner = ({data}: BannerProps) => {
  return (
    <div className='w-full'>
        <img src={data.flags.svg} alt={data.flags.alt} className="w-full h-full" />
    </div>
  )
}

export default Banner