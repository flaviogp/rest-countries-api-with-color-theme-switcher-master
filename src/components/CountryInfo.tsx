import { Countries } from "../utils/types"

type CountryInfoProps = {
    data: Countries;
}

const CountryInfo = ({ data }: CountryInfoProps) => {

    const countryCurrency = data && data.currencies[Object.keys(data.currencies)[0]].name;
    const countryLanguages = data && Object.keys(data.languages)

    return (
        <div 
            className="
                flex flex-col gap-6 leading-10
                capitalize mb-10
            ">
            <h1>{data.name.official}</h1>
            <div 
                className="
                    [&>*>p]:font-bold [&>*>p>span]:font-light
                    lg:flex lg:gap-10
                ">
                <div>
                    <p>Native Name: <span>{data.name.official}</span></p>
                    <p>Population: <span>{data.population}</span></p>
                    <p>Region: <span>{data.region}</span></p>
                    <p>Sub Region: <span>{data.subregion}</span></p>
                    <p>Capital: <span>{data.capital}</span></p>
                </div>
                <div>
                    <p>Top Level Domain: <span>{data.name.common}</span></p>
                    <p>Currencies: <span>{countryCurrency}</span></p>
                    <p>Languages: {countryLanguages && countryLanguages.map(lang => <span key={lang}> {lang} </span>)}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryInfo