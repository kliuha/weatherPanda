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
  mounted() {
    if (this.favoritePage) {
      this.mapWeatherObject(this.weatherObject);
    }
  },
  computed: {
    favoritePage() {
      return this.$route.fullPath == "/favorites";
    },
  },
  watch: {
    weatherObject: function (newVal) {
      this.mapWeatherObject(newVal);
    },
  },
  methods: {
    mapWeatherObject(obj) {
      this.fiveDaysWeather = [];
      obj.list.forEach((element) => {
        if (
          !this.fiveDaysWeather.find(
            (weather) =>
              weather?.Date.split(" ")[0] == element.dt_txt.split(" ")[0]
          )
        ) {
          this.fiveDaysWeather.push({
            Date: element?.dt_txt.split(" ")[0],
            Temperature: (element?.main.temp - 273.15).toFixed(),
          });
        }
      });
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
