<template>
  <div class="weather-info">
    <div class="tabs">
      <button
        name="dayWeekType"
        @click="setView('day')"
        class="day-button toggleButton"
      >
        День
      </button>
      <button
        name="dayWeekType"
        @click="setView('week')"
        class="week-button toggleButton"
      >
        Неделя
      </button>
    </div>
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
  },
  data() {
    return {
      viewType: "day",
    };
  },
  methods: {
    setView(value) {
      this.viewType = value;
    },
  },
};
</script>

<style scoped>
.tabs {
  position: absolute;
  left: 5%;
  top: -46px;
}
.toggleButton {
  background: #00bc9c;
  transition: all 0.2s ease;
  border-radius: 25px;
  outline: none;
}
.day-button {
  padding: 10px 6px 10px 12px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}
.week-button {
  padding: 10px 12px 10px 6px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
}
.weather-info {
  position: relative;
}
@media (max-width: 479px) {
  .toggleButton {
    font-size: 8px;
  }
  .day-button {
    padding: 6px 2px 6px 6px;
  }
  .week-button {
    padding: 6px 6px 6px 2px;
  }
}
@media (min-width: 480px) and (max-width: 767px) {
  .toggleButton {
    font-size: 10px;
  }
  .day-button {
    padding: 8px 3px 8px 8px;
  }
  .week-button {
    padding: 8px 8px 8px 3px;
  }
}
@media (min-width: 768px) and (max-width: 1199px) {
  .toggleButton {
    font-size: 12px;
  }
  .day-button {
    padding: 10px 4px 10px 10px;
  }
  .week-button {
    padding: 10px 10px 10px 4px;
  }
}
@media (min-width: 1200px) {
  .toggleButton {
    font-size: 14px;
  }
  .day-button {
    padding: 10px 6px 10px 12px;
  }
  .week-button {
    padding: 10px 12px 10px 6px;
  }
}
</style>
