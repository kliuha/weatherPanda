<template>
  <div class="home">
    <div class="container">
      <div v-for="block in blockArray" :key="block.id">
        <WeatherBlock v-bind:id="block.id" @addBlock="onAdd" />
      </div>
    </div>
  </div>
</template>

<script>
import WeatherBlock from "@/components/WeatherBlock";
export default {
  name: "Home",
  components: {
    WeatherBlock,
  },
  data() {
    return {
      blockArray: [{ id: "0" }],
      limitDone: false,
    };
  },
  methods: {
    onAdd() {
      if (this.blockArray.length == 5) {
        alert("no");
      } else {
        this.blockArray.push({ id: `${this.blockArray.length}` });
      }
    },
  },
};
</script>
