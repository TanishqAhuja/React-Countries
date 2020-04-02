export const getAllCountries = () => (
    fetch(`https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag`)
        .then(response => response.json()));

export const getCountriesBySearch = (searchKey) => {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchKey}?fields=name;capital;population;region;flag`)
        .then(response => response.json());
};

export const getCountriesByRegion = (regionName) => {
    return fetch(`https://restcountries.eu/rest/v2/region/${regionName}?fields=name;capital;population;region;flag`)
        .then(response => response.json());
};

export const getCountryNamesByCodes = (codes) => {
    const codesStr = codes.join(';');
    return fetch(`https://restcountries.eu/rest/v2/alpha?codes=${codesStr}&fields=name`)
        .then(response => response.json());
};

export const getCountryDetails = (countryName) => {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true&
    fields=name;capital;currencies;topLevelDomain;population;languages;region;subregion;nativeName;flag;borders`)
        .then(response => response.json());
};

