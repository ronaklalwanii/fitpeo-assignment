import React, { useState } from "react";

import classNames from "classnames";
import ReactApexChart from "react-apexcharts";

const seriesObj = {
  daily: [
    {
      name: "Check In",
      data: [25, 70, 100, 90, 40, 25, 80],
    },
    {
      name: "Checkout",
      data: [75, 90, 25, 40, 50, 10, 50],
    },
  ],

  weekly: [
    {
      name: "Check In",
      data: [45, 90, 80, 70, 60, 45, 60],
    },
    {
      name: "Checkout",
      data: [55, 70, 45, 60, 30, 40, 70],
    },
  ],

  monthly: [
    {
      name: "Check In",
      data: [60, 80, 50, 25, 40, 60, 70],
    },
    {
      name: "Checkout",
      data: [40, 90, 60, 70, 40, 50, 90],
    },
  ],
};

const options = {
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#16a34a", "#dc2626"],
  plotOptions: {
    bar: {
      borderRadius: 8,
      horizontal: false,
      columnWidth: "40%",
      borderRadiusApplication: "end",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: "30%",
          },
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
      },
    },
  ],
};

const tabsList = Object.keys(seriesObj);
const ReservationStats = () => {
  const [series, setSeries] = useState("daily");

  return (
    <div className="card shadow-md">
      <div className="card-body pt-0">
        <div className="flex justify-between items-center flex-wrap ga-4">
          <h2 className="card-title text-black">Reservation Stats</h2>
          <div className="tabs">
            {tabsList.map((tab) => (
              <a
                key={tab}
                className={classNames("tab tab-bordered capitalize", {
                  "tab-active text-black": series === tab,
                })}
                onClick={() => setSeries(tab)}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
        <ReactApexChart
          type="bar"
          height={350}
          options={options}
          series={seriesObj[series]}
        />
      </div>
    </div>
  );
};

export default ReservationStats;
