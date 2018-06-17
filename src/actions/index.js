import Axios from 'axios';


const API_KEY = "70aba3b1c1ebf5b5e1b717e1e1a551f6"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const req = Axios.get(url);
    console.log("req:", req);
    return {
        type: FETCH_WEATHER,
        payload: req
    };
}