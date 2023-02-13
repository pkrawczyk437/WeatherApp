'use strict';
import { getData } from './js/getData.js';
const searchInput = document.querySelector('.weatherSearch__cityName');
const suggestionsList = document.querySelector('.citySuggestions');
let allCities = [];

const getCities = async () => {
	const response = await getData('/cities');
	allCities = await response.json();
};

const showDropdown = () =>
	suggestionsList.classList.add('citySuggestions--active');

const hideDropdown = () =>
	suggestionsList.classList.remove('citySuggestions--active');

const displaySuggestedCities = (suggestedCities) => {
	suggestionsList.replaceChildren();
	if (suggestedCities.length > 0) {
		const fragment = document.createDocumentFragment();
		suggestedCities.forEach(({ name, country }) => {
			const city = document.createElement('li');
			city.innerText = `${name}, ${country}`;
			city.className = 'citySuggestions__item';
			fragment.append(city);
		});
		suggestionsList.append(fragment);
		showDropdown();
	} else {
		hideDropdown();
	}
};

const searchCity = (searchedCity, limit = 5) => {
	return allCities
		.filter(({ name }) => name.includes(searchedCity))
		.slice(0, limit);
};

const getCitySuggestions = () => {
	const { value: searchedCity } = searchInput;
	const suggestedCities = searchCity(searchedCity);
	displaySuggestedCities(suggestedCities);
	if (!searchedCity) hideDropdown();
};

const displayCityForecast = (cityDetails) => {
	const currentWeatherContainer = document.querySelector('.weatherDashboard__current');
	const titleContainer = document.createElement('div')
};

const getSelectedCityByName = async (city) => {
	const [cityName] = city.innerText.split(',');
	const response = await getData(`/forecast/${cityName}`);
	const cityDetails = await response.json();
	displayCityForecast(cityDetails);
};

const selectCity = ({ target }) => {
	const selectedCity = target.closest(
		'.citySuggestions > .citySuggestions__item'
	);

	if (selectedCity) {
		selectedCity.classList.add('citySuggestions__item--selected');
		const selectedSuggestions = suggestionsList.querySelectorAll(
			'.citySuggestions__item--selected'
		);
		selectedSuggestions.forEach((suggestion) =>
			suggestion.classList.remove('citySuggestions__item--selected')
		);
		selectedCity.classList.add('citySuggestions__item--selected');
		getSelectedCityByName(selectedCity);
	}
};

searchInput.addEventListener('input', getCitySuggestions);
suggestionsList.addEventListener('click', selectCity);
getCities();
