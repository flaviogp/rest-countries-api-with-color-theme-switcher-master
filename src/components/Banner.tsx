import { Countries } from "../utils/types"

type BannerProps = {
    data: Countries;
}

const Banner = ({data}: BannerProps) => {
  return (
    <div className='w-full lg:max-w-[44%]'>
        <img src={data.flags.svg} alt={data.flags.alt} className="w-full max-w-[600px]" />
    </div>
  )
}

export default Banner