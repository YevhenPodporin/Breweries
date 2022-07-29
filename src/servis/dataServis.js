const urlSearchBreweries = 'https://api.openbrewerydb.org/breweries/search?query=';
const urlSearchBreweryById = 'https://api.openbrewerydb.org/breweries/'


export default class DataServis {
	async getBreweriesByValue(id) {
		const BREWERIES_URL = urlSearchBreweries + id;
		const response = await fetch(BREWERIES_URL);
		const data = await response.json();
		
		return data;
	};

	async getBreweryInfoById(id) {
		const requestUrl = urlSearchBreweryById + id;
		const response = await fetch(requestUrl);

		return response.json();
	}
}