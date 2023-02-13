import { Router } from 'express';
import { getForecastByCityName } from '../controllers/weatherController.js';
export const weatherRouter = Router();

weatherRouter.get('/:cityName', getForecastByCityName);
