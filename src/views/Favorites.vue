<template>
  <div class="home">
    <div class="container">
      <div v-for="block in blockArray" :key="block.id">
        <WeatherBlock
          v-bind:id="block.id"
          v-bind:weatherData="getLocalData"
          @addBlock="onAdd"
          @deleteBlock="onDelete"
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
      blockArray: [{ id: "0" }],
      limitDone: false,
      showModal: false,
    };
  },
  computed: {
    getLocalData: function () {
      const items = { ...localStorage };
      return items;
    },
  },
  methods: {
    onAdd() {
      if (this.blockArray.length == 5) {
        alert("no");
      } else {
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
  },
};
</script>
