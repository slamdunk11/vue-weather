import axios from "axios";

const config = {
    baseUrl: "http://api.openweathermap.org/data/2.5/weather?q=busan&appid=0e5678a57f40c7492409ee9653caee4b&units=metric",
};

function getWeather() {
    return axios.get(`${config.baseUrl}`);
}

export { getWeather };