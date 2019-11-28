<template>
  <div>
    <div class="text-center font-semibold text-5xl">Result</div>
    <img src="../assets/images/check.svg" class="w-32 mx-auto" alt />
    <div class="text-center mt-4">
      <b-button
        class="bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500 rounded w-1/4 mx-3"
      >Download classify data</b-button>
      <b-button
        class="bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500 rounded w-1/4 mx-3"
      >Download graph</b-button>
    </div>
    <div class="row w-full mt-5">
      <div class="w-2/3 mx-auto">
        <canvas id="chart1" height="50" width="100"></canvas>
      </div>
    </div>
    <div class="row w-full mt-5">
      <div class="w-2/3 mx-auto">
        <canvas id="chart2" height="50" width="100"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  components: {},
  mounted: function() {
     this.chartData = this.$store.state.responseModel
     console.log(this.chartData)
    // ในกรณีที่ response data มาจาก model Tag suggesstion
    var keyData1 = Object.keys(this.chartData[0].data[0]);
    var arrayData1 = Object.values(this.chartData[0].data[0]);
    console.log
    var ctx1 = document.getElementById("chart1").getContext("2d");
    var bar = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: keyData1,
        datasets: [
          {
            label: "# of Vote",
            data: arrayData1
          }
        ]
      }
    });
    console.log(bar);
    //ในกรณีที่ response data มาจาก model Sentimental
    for (var i in this.chartData[1].data) {
      var thisPolaris = this.chartData[1].data[i].polarity;
      this.polarityData[thisPolaris] += 1;
    }
    var ctx2 = document.getElementById("chart2").getContext("2d");
    var pie = new Chart(ctx2, {
      type: "pie",
      data: {
        labels: Object.keys(this.polarityData),
        datasets: [
          {
            label: "# of Vote",
            data: Object.values(this.polarityData)
          }
        ]
      }
    });
    console.log(pie);
  },
  data() {
    return {
      polarityData: {
        positive: 0,
        negative: 0,
        neutral: 0
      },
      chartData: []
    };
  }
};
</script>

<style></style>
