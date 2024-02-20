type Name = {
    common: string;
    official: string;
    ell: {
        common: string;
        official: string;
    }
    tur: {
        common: string;
        official: string;
    }
}

type Currencies = {
    EUR: {
        name: string,
        symbol: string
    }

}

type Idd = {
    root: string,
    suffixes: string[]
}

type Languages = {
    ell: string,
    tur: string
}


type Translation = {
    oficial: string;
    common: string;
}

type Translations = {
    ara: Translation;
    bre: Translation;
    ces: Translation;
    cym: Translation;
    deu: Translation;
    est: Translation;
    fin: Translation;
    fra: Translation;
    hrv: Translation;
    hun: Translation;
    ita: Translation;
    jpn: Translation;
    kor: Translation;
    nld: Translation;
    per: Translation;
    por: Translation;
    rus: Translation;
    slk: Translation;
    spa: Translation;
    srp: Translation;
    swe: Translation;
    tur: Translation;
    urd: Translation;
    zho: Translation;
}

type Map = {
    googleMaps: string;
    openStreetMaps: string;
}

type Denonym = {
    f: string
    m: string
}

type CoatOfArms = {
    png: string;
    svg: string;
}

type Flag = {
    png: string,
    svg: string,
    alt: string;
}


export type Countries = {
    name: Name
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translation: Translations;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: Denonym;
    flag: string;
    maps: Map;
    population: number;
    gini: { 2018: number };
    fifa: string;
    car: { signs: string[], side: string };
    timezones: string[];
    continents: string[];
    flags: Flag;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: { latlng: number[] };
    postalCode: { format: string, regex: string };
}
