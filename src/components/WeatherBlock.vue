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
    <div class="flex-items">
      <CityInput />
    </div>
    <div class="city-weather flex-items">
      <WeatherInfo v-bind:blockId="id" v-bind:weatherArray="weatherData" />
    </div>
    <div class="weather-chart flex-items">
      <Chart v-bind:blockId="id" v-bind:weatherArray="weatherData" />
    </div>
    <div class="plus-button">
      <button
        class="plus flex-items"
        @click="addBlock"
        v-bind:class="{ choosen: isChoosen }"
      >
        &#9660;
      </button>
    </div>
  </div>
</template>

<script>
import CityInput from "@/components/CityInput";
import WeatherInfo from "@/components/WeatherInfo";
import Chart from "@/components/Tools/Chart.vue";
import { mapGetters } from "vuex";

export default {
  name: "WeatherBlock",
  components: {
    CityInput,
    WeatherInfo,
    Chart,
  },
  props: {
    id: String,
  },
  data() {
    return {
      isChoosen: false,
    };
  },
  computed: {
    ...mapGetters("appModule", ["weatherData"]),
  },
  methods: {
    toggleFavourites() {
      this.isChoosen = !this.isChoosen;
    },
    addBlock() {
      this.$emit("addBlock");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-wrapper {
  display: flex;
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

.choosen {
  transition: 0.3s;
  color: yellow;
}
</style>
