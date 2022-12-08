import * as constants from "./app.constants";
import { getWeatherData, getCityData } from "../../services/app.service";

export const appModule = {
  namespaced: true,
  state: {
    weatherData: [],
    cityAutocompleteData: [],
  },
  getters: {
    weatherData: (state) => state.weatherData,
    cityAutocompleteData: (state) => state.cityAutocompleteData,
  },
  actions: {
    loadWeatherData({ commit }, city) {
      getWeatherData(city).then((response) =>
        commit(constants.SAVE_WEATHER_DATA, response)
      );
    },
    loadCityData({ commit }, city) {
      getCityData(city).then((response) =>
        commit(constants.SAVE_CITY_DATA, response)
      );
    },
    deleteWeatherItem({ commit }, payload) {
      commit(constants.DELETE_WEATHER_ITEM, payload);
    },
  },
  mutations: {
    [constants.SAVE_WEATHER_DATA]: (state, payload) => {
      if (payload.cod === "200") {
        state.weatherData.push(payload);
      }
    },
    [constants.SAVE_CITY_DATA]: (state, payload) => {
      for (let i = 0; i < payload.length; i++) {
        if (
          !state.cityAutocompleteData.find(
            (city) => city === payload[i].display_name.split(",")[0]
          )
        ) {
          const cityName = payload[i].display_name.split(",")[0];
          state.cityAutocompleteData.push(cityName);
        }
      }
    },
    [constants.DELETE_WEATHER_ITEM]: (state, payload) => {
      state.weatherData = state.weatherData.filter(
        (item) => item.city.id !== payload.city.id
      );
    },
  },
};
