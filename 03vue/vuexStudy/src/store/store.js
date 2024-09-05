import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    name: "한민욱",
    counter: 0,
    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "seoul",
    },
  },
  mutations: {
    updataData(state, payload) {
      state.weatherData.icon = payload.weather[0].icon;
    },
  },
  actions: {
    async getWeather(context) {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
      );
      console.log(res.data);
      // context.commit("updataData", res.data);
    },
  },
});
