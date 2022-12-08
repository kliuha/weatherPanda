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
  },
  watch: {
    weatherArray: function (newVal) {
      this.dataForChart = this.reduceWeatherObject(newVal[this.blockId]);
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
              label: "Acquisitions by days",
              data: data?.map((row) => row.Temperature),
            },
          ],
        },
      });
    },
    reduceWeatherObject(obj) {
      let temp = [];
      const dateNow = new Date().getDate();
      obj.list.forEach((element) => {
        const elementDate = new Date(element.dt * 1000).getDate();
        if (dateNow == elementDate) {
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
