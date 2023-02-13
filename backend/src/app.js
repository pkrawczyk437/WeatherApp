import express from 'express';
import cors from 'cors';
import { citiesRouter } from './routes/cities.js';
import { weatherRouter } from './routes/weather.js';
const PORT = process.env.PORT || 3000;
const app = express();
app.use(
	cors({
		origin: 'http://127.0.0.1:5500',
		methods: ['GET'],
	})
);
app.use('/cities', citiesRouter);
app.use('/forecast', weatherRouter);
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
