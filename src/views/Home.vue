<template>
  <div class="home">
    <div class="container">
      <Modal
        v-if="showModal"
        @accept="onAccept"
        @decline="onDecline"
        v-bind:Message="Message"
      />
      <div v-for="block in blockArray" :key="block.id">
        <WeatherBlock
          v-bind:id="block.id"
          v-bind:weatherData="weatherArray"
          @addBlock="onAdd"
          @deleteBlock="onDelete(block.id)"
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
      blockForDelete: "",
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
    onDelete(id) {
      if (this.blockArray.length > 1) {
        this.blockForDelete = id;
        this.showModal = true;
      }
    },
    onAccept() {
      this.showModal = false;
      this.deleteWeatherItem(this.blockForDelete);
      this.blockArray.splice(this.blockForDelete, 1);
      this.blockForDelete = "";
    },
    onDecline() {
      this.showModal = false;
      this.blockForDelete = "";
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
