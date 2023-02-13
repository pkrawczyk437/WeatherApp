import { Router } from 'express';
import {
	getAllCities,
	getCitiesNearLocation,
} from '../controllers/citiesController.js';
export const citiesRouter = Router();

citiesRouter.get('/', getAllCities);
citiesRouter.get('/:lat/:long', getCitiesNearLocation);
