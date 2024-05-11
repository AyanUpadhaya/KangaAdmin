<template>
  <canvas id="myChart" width="400" height="300"></canvas>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "LineChart",
  mounted() {
    const ctx = document.getElementById("myChart");
    const data = {
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "",
          data: [5, 10, 18, 12, 17, 6, 14, 20],
          borderWidth: 1,
          fill: {
            target: "origin",
            above: "rgba(3, 187, 190, 0.582)",
          },
        },
        {
          label: "",
          data: [12, 16, 17, 12, 17, 6, 14, 20],
          borderWidth: 1,
          fill: {
            target: "origin",
            above: "rgba(255, 171, 4, .5)",
          },
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
      backgroundColor: "#03BBBE",
      options: {
        maintainAspectRatio: false,
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: false,
            text: "Chart.js Line Chart - Multi Axis",
          },
          labels: {
            display: false,
          },
          legend: {
            display: false,
            position: "center",
          },
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
          },
          y1: {
            type: "linear",
            display: false,
            position: "right",

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        },
      },
    };

    new Chart(ctx, config);
  },
};
</script>
