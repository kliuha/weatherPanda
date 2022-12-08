<template>
  <div class="day-weather-info">
    <div>
      <p v-for="weather in fiveDaysWeather" :key="weather.Date">
        Дата: {{ weather.Date }}
      </p>
    </div>
    <div>
      <p v-for="weather in fiveDaysWeather" :key="weather.Date">
        Температура: {{ weather.Temperature + "&#176;" + "C" }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeekWeather",
  props: {
    weatherObject: Object,
  },
  data() {
    return {
      fiveDaysWeather: [],
    };
  },
  watch: {
    weatherObject: function (newVal) {
      this.reduceWeatherObject(newVal);
    },
  },
  methods: {
    reduceWeatherObject(obj) {
      let temp = [];
      obj.list.forEach((element) => {
        if (
          !temp.find(
            (weather) =>
              weather?.Date.split(" ")[0] == element.dt_txt.split(" ")[0]
          )
        ) {
          temp.push({
            Date: element?.dt_txt.split(" ")[0],
            Temperature: (element?.main.temp - 273.15).toFixed(),
          });
        }
      });
      this.fiveDaysWeather = temp;
    },
  },
};
</script>

<style>
.day-weather-info {
  display: flex;
  justify-content: space-between;
}
</style>
