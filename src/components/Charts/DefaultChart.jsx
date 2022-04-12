import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const DefaultChart = ({ data, chartHeight }) => {
  const spendingChartConfig = {
    type: "line",
    data: {
      datasets: [{
        data: data,
        borderColor: "#0e7d1c",
      }],
    },
    options: {
      animations: {
        tension: {
          duration: 500,
          easing: "easeOutQuint",
          from: 1,
          to: 0.3,
        },
      },
      layout: {
        padding: 20,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          position: "average",
        },
      },
      scales: {
        y: {
          min: 0,
          max: chartHeight,
          grid: {
            display: false
          }
        },
        x: {
          reverse: true,
        }
      },
      elements: {
        point: {
          pointBackgroundColor: "#0e7d1c",
        },
      },
    },
  };

  return (
    <Line
      type={spendingChartConfig.type}
      options={spendingChartConfig.options}
      data={spendingChartConfig.data}
    />
  );
};

export default DefaultChart;