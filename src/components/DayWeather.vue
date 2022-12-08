<template>
  <div class="day-weather-info">
    <div>
      <p>Долгота: {{ weatherObject?.city.coord.lon }}</p>
      <p>Широта: {{ weatherObject?.city.coord.lat }}</p>
    </div>
    <div>
      <p>Дата: {{ weatherObject?.list[0].dt_txt }}</p>
      <p>
        Температура:
        {{
          weatherObject?.list[0].main.temp
            ? (weatherObject?.list[0].main.temp - 273.15).toFixed() +
              "&#176;" +
              "C"
            : "" + "&#176;" + "C"
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayWeather",
  props: {
    weatherObject: Object,
  },
};
</script>

<style>
.day-weather-info {
  display: flex;
  justify-content: space-between;
}
</style>
