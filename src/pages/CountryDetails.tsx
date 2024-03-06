import { useParams } from "react-router-dom"
import { Countries } from "../utils/types"
import BackButton from "../components/BackButton"
import { useFetch } from "../hooks/useFetch"
import Banner from "../components/Banner"
import CountryInfo from "../components/CountryInfo"
import Borders from "../components/Borders"
import Loading from "../components/Loading"


const Country = () => {
    const {name} = useParams()

    const {singleData, loading} = useFetch<Countries>(`name/${name}`);
    return (
      <main 
        className='
          container p-5 flex flex-col gap-10 
          [&>*]:dark:text-white
        '>
      {

        loading ? < Loading/> :

        singleData && (
          <>
            <BackButton />
            <section className="flex flex-col gap-10 lg:gap-16 lg:flex-row">
              <Banner data={singleData} />
              <div className="lg:w-[50%]">
                <CountryInfo  data={singleData}/>
                <Borders data={singleData}/>
              </div>
            </section>
          </>
        )
      }
  </main>
  )
}

export default Country