import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaArrowUp } from "react-icons/fa";
import { Dropdown } from "flowbite-react";

const options = {
  chart: {
    height: "100%",
    width: "100%",
    type: "area",
    fontFamily: "Poppins, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  legend: {
    show: true,
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -26,
    },
  },
  xaxis: {
    categories: [
      "01 February",
      "02 February",
      "03 February",
      "04 February",
      "05 February",
      "06 February",
      "07 February",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      formatter: function (value) {
        return value;
      },
    },
  },
};

const ReviewsChart = () => {
  const [days, setDays] = useState(7);
  const [headings, setHeadings] = useState({});
  const getDate = (date) => {
    let today = new Date();
    today.setDate(today.getDate() - date);
    return (
      today.toLocaleString("default", { month: "long" }) + " " + today.getDate()
    );
  };

  const series = [
    {
      name: `${headings?.pastStart ?? ""} to ${headings?.pastEnd ?? ""}`,
      data: [1500, 1418, 1456, 1526, 1356, 1256],
      color: "#1A56DB",
    },
    {
      name: `${headings?.currentStart ?? ""} to ${headings?.currentEnd ?? ""}`,
      data: [643, 413, 765, 412, 1423, 1731],
      color: "#7E3BF2",
    },
  ];

  useEffect(() => {
    setHeadings({
      pastStart: getDate(2 * days - 1),
      pastEnd: getDate(days),
      currentStart: getDate(days - 1),
      currentEnd: getDate(0),
    });
  }, [days]);

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-2xl ring-1 ring-gray-300 drop-shadow-xl dark:bg-gray-800 dark:ring-gray-700 md:p-6">
      <div className="mb-5 flex justify-between">
        <div>
          <h5 className="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">
            12,423
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Reviews : last {days} days
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-center text-2xl font-semibold text-green-500 dark:text-green-500">
          23%
          <FaArrowUp />
        </div>
      </div>
      {/* chart */}
      <div className="relative w-full p-2 dark:text-black">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={200}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between pt-5">
          {/* dropdown */}
          <Dropdown label={"Last " + days + " Days"} inline>
            <Dropdown.Item onClick={() => setDays(7)}>7 Days</Dropdown.Item>
            <Dropdown.Item onClick={() => setDays(28)}>28 Days</Dropdown.Item>
            <Dropdown.Item onClick={() => setDays(30)}>30 Days</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ReviewsChart;
