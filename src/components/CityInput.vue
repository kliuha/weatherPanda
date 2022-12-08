<template>
  <div class="cityinp">
    <input
      class="search-input"
      required
      type="text"
      placeholder="Например, Киев"
      v-model.trim="inputText"
      list="city-list"
      @input="inputText.length >= 3 ? inputCityName(inputText) : ''"
      @change="getCityWeather(inputText)"
    />
    <template>
      <datalist id="city-list" class="datalist">
        <option
          v-for="cities in cityAutocompleteData"
          :key="cities"
          :value="cities"
        ></option>
      </datalist>
    </template>
    <div v-if="loadingState">
      <Loader />
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Tools/Loader.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CityInput",
  components: {
    Loader,
  },
  data() {
    return {
      inputText: "",
      loadingState: false,
    };
  },
  computed: {
    ...mapGetters("appModule", ["cityAutocompleteData"]),
  },
  methods: {
    ...mapActions("appModule", ["loadWeatherData", "loadCityData"]),
    async inputCityName(city) {
      this.loadingState = true;
      await this.loadCityData(city);
      this.loadingState = false;
    },
    async getCityWeather(city) {
      this.loadingState = true;
      await this.loadWeatherData(city);
      this.loadingState = false;
    },
  },
};
</script>

<style>
.search-input {
  transition: 0.5s;
  outline: thick groove #32a1ce;
  background: #fffefe;
  border-radius: 1em;
  border: 1px solid black;
  width: 30%;
  height: 2em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 0.3em 0.9em;
}
.search-input:focus {
  box-shadow: 60px -16px teal;
  transition: 0.5s;
  outline: none;
}
</style>
