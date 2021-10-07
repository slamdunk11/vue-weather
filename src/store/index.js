import Vue from "vue";
import Vuex from "vuex";
import { getWeather } from "../api/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        weather: [],
    },

    mutations: {
        SET_WEATHER(state, weather) {
            state.weather = weather;
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
});