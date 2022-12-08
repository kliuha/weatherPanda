<template>
  <div class="home">
    <WeatherBlock />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherBlock from "@/components/WeatherBlock";
export default {
  name: "Home",
  components: {
    WeatherBlock,
  },
};
</script>
