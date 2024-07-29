import { priceFormatter } from "../utils/helpers/price-formatter";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useChartBar = (finance: number[], mainLabel: string, optionLabels: string[]): [any, any] => {
  const chartData = {
    labels: optionLabels,
    datasets: [
      {
        label: mainLabel,
        data: finance,
        backgroundColor: ["#F24E1E", "#29A0DC", "#0ACF83"],
        borderRadius: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        type: "category" as const,
        labels: optionLabels,
        ticks: {
          font: {
            size: 18,
            weight: 700,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 16,
            weight: 700,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: 700,
        },
        formatter: (value: number) => priceFormatter.format(value),
      },
    },
  };

  return [chartData, chartOptions];
};
