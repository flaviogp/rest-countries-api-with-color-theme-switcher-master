import Card from './Card'
import { Countries } from '../utils/types'
import Loading from './Loading';

type CountryListProps = {
    data: Countries[] | null;
    loading: boolean;
}

const Countrylist = ({data, loading}: CountryListProps) => {
  return (
    <section className='w-full'>
      {
          loading ?
              <Loading />
          :
              <div 
                className=' 
                  w-full flex flex-col items-center gap-8
                  md:flex-row md:flex-wrap md:gap-x-0 md:justify-between
                '>
                  {data && data.map(country => <Card key={country.cca2} country={country} /> )}
              </div>
      }
    </section>
  )
}

export default Countrylist