<template>
  <div class="chart">
    <canvas :id="'acquisitions' + blockId"></canvas>
  </div>
</template>

<script>
import * as Chart from "chart.js";

export default {
  name: "Chart",
  data() {
    return {
      dataForChart: {},
    };
  },
  props: {
    weatherArray: Array,
    blockId: String,
    viewType: String,
  },
  watch: {
    weatherArray: function (newVal) {
      this.dataForChart = this.mapWeatherObject(newVal[this.blockId]);
      this.renderChart(this.dataForChart);
    },
    viewType: function () {
      this.dataForChart = this.mapWeatherObject(
        this.weatherArray[this.blockId]
      );
      this.renderChart(this.dataForChart);
    },
  },
  methods: {
    renderChart(data) {
      new Chart(document.getElementById(`acquisitions${this.blockId}`), {
        type: "line",
        data: {
          labels: data?.map((row) => row.Date),
          datasets: [
            {
              label: "График погоды",
              data: data?.map((row) => row.Temperature),
            },
          ],
        },
      });
    },
    mapWeatherObject(obj) {
      let temp = [];
      const dateNow = new Date().getDate();
      obj?.list.forEach((element) => {
        const elementDate = new Date(element.dt * 1000).getDate();
        if (
          this.viewType == "day"
            ? dateNow == elementDate
            : !temp.find(
                (weather) =>
                  weather?.Date.split(" ")[0] == element.dt_txt.split(" ")[0]
              )
        ) {
          temp.push({
            Date: element?.dt_txt,
            Temperature: (element?.main.temp - 273.15).toFixed(),
          });
        }
      });
      return temp;
    },
  },
};
</script>

<style>
.chart {
  margin: 0 auto;
  width: 40%;
}
</style>
