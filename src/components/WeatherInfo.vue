<template>
  <div class="weather-info">
    <div class="tabs">
      <input
        type="radio"
        name="dayWeekType"
        id="dayView"
        value="day"
        v-model.trim="viewType"
        checked
      />
      <input
        type="radio"
        name="dayWeekType"
        value="week"
        v-model.trim="viewType"
        id="weekView"
      />
      <div class="switch">
        <label for="dayView">День</label>
        <label for="weekView">Неделя</label>
      </div>
    </div>
    <DayWeather
      v-bind:weatherObject="weatherData[blockId]"
      v-show="viewType == 'day'"
    />
    <WeekWeather
      v-bind:weatherObject="weatherData[blockId]"
      v-show="viewType == 'week'"
    />
  </div>
</template>
<script>
import DayWeather from "@/components/DayWeather.vue";
import WeekWeather from "@/components/WeekWeather.vue";
import { mapGetters } from "vuex";

export default {
  name: "WeatherInfo",
  components: {
    DayWeather,
    WeekWeather,
  },
  props: {
    blockId: String,
  },
  data() {
    return {
      viewType: "day",
    };
  },
  computed: {
    ...mapGetters("appModule", ["weatherData"]),
  },
};
</script>

<style>
.switch {
  position: absolute;
  left: 22%;
  top: 17%;
  width: 110px;
  height: 7%;
  text-align: center;
  margin: -30px 0 0 -75px;
  background: #00bc9c;
  transition: all 0.2s ease;
  border-radius: 25px;
}
.switch span {
  position: absolute;
  width: 20px;
  height: 4px;
  top: 50%;
  left: 50%;
  margin: -2px 0px 0px -4px;
  background: #fff;
  display: block;
  transform: rotate(-45deg);
  transition: all 0.2s ease;
}
.switch span:after {
  content: "";
  display: block;
  position: absolute;
  width: 4px;
  height: 12px;
  margin-top: -8px;
  background: #fff;
  transition: all 0.2s ease;
}
input[type="radio"] {
  display: none;
}
.switch label {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.2);
  width: 60px;
  line-height: 50px;
  transition: all 0.2s ease;
}
label[for="dayView"] {
  position: absolute;
  left: 0px;
  height: 20px;
}
label[for="weekView"] {
  position: absolute;
  right: 0px;
}
#weekView:checked ~ .switch {
  background: #027e6a;
}
#weekView:checked ~ .switch span {
  background: #fff;
  margin-left: -8px;
}
#weekView:checked ~ .switch span:after {
  background: #fff;
  height: 20px;
  margin-top: -8px;
  margin-left: 8px;
}
#dayView:checked ~ .switch label[for="dayView"] {
  color: #fff;
}
#weekView:checked ~ .switch label[for="weekView"] {
  color: #fff;
}
</style>
