<template>
  <div class="home">
    <div class="container">
      <div v-for="block in blockArray" :key="block.id">
        <WeatherBlock
          v-bind:id="block.id"
          v-bind:weatherData="weatherArray"
          @addBlock="!disabled ? onAdd : ''"
          @deleteBlock="!disabled ? onDelete : ''"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WeatherBlock from "@/components/WeatherBlock.vue";

export default {
  name: "Favorites",
  components: {
    WeatherBlock,
  },
  data() {
    return {
      blockArray: [],
      limitDone: false,
      showModal: false,
      weatherArray: [],
      localData: { ...localStorage },
    };
  },
  mounted() {
    for (let i = 0; i < 5; i++) {
      if (localStorage.getItem(i)) {
        try {
          this.weatherArray.push(JSON.parse(localStorage.getItem(i)));
          this.onAdd();
        } catch (e) {
          localStorage.removeItem(i);
        }
      }
    }
  },
  computed: {
    getLocalData() {
      const data = JSON.stringify(localStorage);
      console.log(data);
      return data;
    },
    disabled() {
      return this.$route.fullPath == "/favorites";
    },
  },
  methods: {
    onAdd() {
      if (this.blockArray.length < 5) {
        this.blockArray.push({ id: `${this.blockArray.length}` });
      }
    },
    onDelete() {
      if (this.blockArray.length > 1) {
        this.showModal = true;
      }
    },
    onAccept(id) {
      this.showModal = false;
      this.deleteWeatherItem(id);
      this.blockArray.splice(id, 1);
    },
    onDecline() {
      this.showModal = false;
    },
  },
  watch: {
    blockArray: function () {
      this.blockArray.forEach((element, index) => {
        element.id = `${index}`;
      });
    },
    localData: function (newVal) {
      for (const item in newVal) {
        if (!isNaN(item)) {
          this.weatherArray.push(JSON.parse(newVal[item]));
          this.onAdd();
        }
      }
      console.log(this.weatherArray);
    },
  },
};
</script>
