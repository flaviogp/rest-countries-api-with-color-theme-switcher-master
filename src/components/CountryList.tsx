import Card from './Card'
import { Countries } from '../utils/types'
import Loading from './Loading';

type CountryListProps = {
    data: Countries[] | null;
    loading: boolean;
}

const Countrylist = ({data, loading}: CountryListProps) => {
  return (
    <>
    {
        loading ?
            <Loading />
        :
            <div>
                {data && data.map(country => <Card key={country.cca2} country={country} /> )}
            </div>
    }
    </>
  )
}

export default Countrylist