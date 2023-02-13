import { BASE_URL } from '../config.js';
export const getData = async (path) => await fetch(`${BASE_URL}${path}`);
