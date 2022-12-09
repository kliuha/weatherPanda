<template>
  <div class="weather-info">
    <DayWeather
      v-bind:weatherObject="weatherArray[blockId]"
      v-show="viewType == 'day'"
    />
    <WeekWeather
      v-bind:weatherObject="weatherArray[blockId]"
      v-show="viewType == 'week'"
    />
  </div>
</template>
<script>
import DayWeather from "@/components/DayWeather.vue";
import WeekWeather from "@/components/WeekWeather.vue";

export default {
  name: "WeatherInfo",
  components: {
    DayWeather,
    WeekWeather,
  },
  props: {
    blockId: String,
    weatherArray: Array,
    viewType: String,
  },
};
</script>

<style scoped>
.weather-info {
  position: relative;
}
</style>
