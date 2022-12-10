<template>
  <div class="home">
    <div class="container">
      <div v-for="block in blockArray" :key="block.id">
        <Modal
          v-if="showModal"
          v-on:accept="onAccept(block.id)"
          @decline="onDecline"
          v-bind:Message="Message"
        />
        <WeatherBlock
          v-bind:id="block.id"
          v-bind:weatherData="weatherArray"
          @addBlock="onAdd"
          @deleteBlock="onDelete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WeatherBlock from "@/components/WeatherBlock";
import Modal from "@/components/Tools/Modal.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    WeatherBlock,
    Modal,
  },
  data() {
    return {
      blockArray: [{ id: "0" }],
      limitDone: false,
      Message: [{ id: "0", text: "Вы уверены?" }],
      showModal: false,
      weatherArray: [],
    };
  },
  computed: {
    ...mapGetters("appModule", ["weatherData"]),
  },
  methods: {
    ...mapActions("appModule", ["deleteWeatherItem"]),
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
    weatherData: function (newVal) {
      this.weatherArray = newVal;
    },
  },
};
</script>
