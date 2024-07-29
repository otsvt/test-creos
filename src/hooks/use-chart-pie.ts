/* eslint-disable @typescript-eslint/no-explicit-any */
export const useChartPie = (issues: number[], mainLabel: string, optionLabels: string[]): [any, any] => {
  const chartData = {
    type: "pie",
    labels: optionLabels,
    datasets: [
      {
        label: mainLabel,
        data: issues,
        backgroundColor: ["#0ACF83", "#F24E1E", "#29A0DC"],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          font: {
            size: 14,
            weight: 700,
          },
          padding: 15,
          boxWidth: 20,
          boxHeight: 20,
          usePointStyle: true,
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: 700,
        },
      },
    },
  };
  return [chartData, chartOptions];
};
