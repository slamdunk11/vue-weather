import axios from "axios";

const config = {
    baseUrl: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0",
};

function getWeather() {
    return axios.get(`${config.baseUrl}`);
}

export { getWeather };