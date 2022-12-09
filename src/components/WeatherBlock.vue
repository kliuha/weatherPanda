<template>
  <div class="weather-wrapper">
    <div class="favourite-button-wrapper">
      <button
        class="favourite-button"
        @click="toggleFavourites"
        v-bind:class="{ choosen: isChoosen }"
      >
        &#9733;
      </button>
    </div>
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
    <div class="flex-items">
      <CityInput />
    </div>
    <div class="city-weather flex-items">
      <WeatherInfo
        v-bind:blockId="id"
        v-bind:weatherArray="weatherData"
        v-bind:viewType="viewType"
      />
    </div>
    <div class="weather-chart flex-items">
      <Chart
        v-bind:blockId="id"
        v-bind:viewType="setViewType"
        v-bind:weatherArray="weatherData"
      />
    </div>
    <div class="add-delete-buttons">
      <button class="add flex-items" @click="addBlock">&#8744;</button>
      <button class="delete flex-items" @click="deleteBlock">&#8743;</button>
    </div>
  </div>
</template>

<script>
import CityInput from "@/components/CityInput";
import WeatherInfo from "@/components/WeatherInfo";
import Chart from "@/components/Tools/Chart.vue";

export default {
  name: "WeatherBlock",
  components: {
    CityInput,
    WeatherInfo,
    Chart,
  },
  props: {
    id: String,
    weatherData: Array,
  },
  data() {
    return {
      isChoosen: false,
      viewType: "day",
    };
  },
  computed: {
    setViewType: function () {
      return this.viewType;
    },
  },
  methods: {
    toggleFavourites() {
      this.isChoosen = !this.isChoosen;
      this.isChoosen
        ? localStorage.setItem(
            this.id,
            JSON.stringify(this.weatherData[this.id])
          )
        : localStorage.removeItem(this.id);
    },
    addBlock() {
      this.$emit("addBlock");
    },
    deleteBlock() {
      this.$emit("deleteBlock");
    },
    setView(value) {
      this.viewType = value;
    },
  },
  watch: {
    weatherData: function (newVal) {
      this.weatherData = newVal;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-wrapper {
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  margin-top: 1%;
  border: 0.3em solid transparent;
  border-radius: 5px;
  box-shadow: 50x -10px rgb(227, 244, 244);
  background: rgba(244, 233, 233, 0.532);
}
.flex-items {
  margin-top: 0.5em;
}
.favourite-button-wrapper {
  align-self: flex-end;
}
.favourite-button {
  text-shadow: #fc0 1px 0 10px;
  transition: 0.3s;
  background: none;
  border: 0px;
  font-size: 2em;
  color: #b2b3ac;
}
.add-delete-buttons {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.choosen {
  transition: 0.3s;
  color: yellow;
}
.add,
.delete {
  background: none;
  border: 0px;
  font-size: 2em;
  color: #b2b3ac;
}
.delete:hover {
  transition: 0.5s;
  text-shadow: rgb(234, 22, 11) 1px 0 10px;
}
.add:hover {
  transition: 0.5s;
  text-shadow: rgb(6, 160, 24) 1px 0 10px;
}
.tabs {
  position: absolute;
  left: 3%;
  top: 50px;
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
