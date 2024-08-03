"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
  Filler
);

const Graph = ({ myUrlList }: { myUrlList: any }) => {
  console.log(myUrlList);

  const labels = myUrlList?.map((item: any) =>
    moment(item.time).format("YYYY-MM-DD")
  );

  // Create an array with a length equal to the number of labels, filled with the value 5
  const userPerDay = myUrlList.map((item: any) => item.count);

  const data = {
    labels: labels,

    datasets: [
      {
        label: "Total Post Created",
        data: userPerDay,
        backgroundColor: "#3b82f6",
        borderColor: "#1D2327",
        pointBorderColor: "red",
        fill: true,
        tension: 0.4,
        barThickness: 20,
        categoryPercentage: 1.5,
        barPercentage: 1.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            if (Number.isInteger(value)) {
              return value.toString();
            }
            return "";
          },
        },
        title: {
          display: true,
          text: "Number Of Post",
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
            color: "#FF0000",
          },
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Date",
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
            color: "#FF0000",
          },
        },
      },
    },
  };
  //@ts-ignore
  return <Bar className="w-full" data={data} options={options}></Bar>;
};

export default Graph;
