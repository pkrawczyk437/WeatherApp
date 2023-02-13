const { API_URL, API_KEY } = process.env;

export const getForecastByCityName = async (req, res) => {
	const { cityName } = req.params;
	const response = await fetch(
		`${API_URL}/forecast.json?key=${API_KEY}&q=${cityName}&days=4`
	);
	const cityDetails = await response.json();
	res.json(cityDetails);
};
