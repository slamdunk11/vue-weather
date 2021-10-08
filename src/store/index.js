import Vue from "vue";
import Vuex from "vuex";
import { getWeather } from "../api/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        info: { weather: [], name: null, min_temp: null, max_temp: null },
    },

    mutations: {
        SET_WEATHER(state, payload) {
            state.info = {
                name: payload.name,
                temp: payload.main.temp,
                min_temp: payload.main.temp_min,
                weather: payload.weather[0].main,
            };
        },
    },
    actions: {
        GET_WEATHER(context) {
            getWeather()
                .then((response) => {
                    console.log(response);
                    context.commit("SET_WEATHER", response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    getters: {
        resultdata: (state) => {
            return state.info;
        },
    },
});