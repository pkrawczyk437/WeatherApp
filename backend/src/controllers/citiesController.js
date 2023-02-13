import cities from 'all-the-cities';

export const getAllCities = (req, res) => res.json(cities);
export const getCitiesNearLocation = (req, res) => {
	const { lat, long } = req.params;
	const latToNum = Number(lat);
	const longToNum = Number(long);
	/*
		req.params LATLONG: [100, 1]
		COORDINATES PROP: [-110, 22]
	
	*/
	// cities.map(({ name, loc: { coordinates } }) => {
	// 	coordinates.filter((latitude, longtitude) =>
	// 		if()
	// 	);
	// });
};
