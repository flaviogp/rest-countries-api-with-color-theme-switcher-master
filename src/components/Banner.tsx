import { Countries } from "../utils/types"

type BannerProps = {
    data: Countries;
}

const Banner = ({data}: BannerProps) => {
  return (
    <div>
        <img src={data.flags.svg} alt={data.flags.alt} />
    </div>
  )
}

export default Banner