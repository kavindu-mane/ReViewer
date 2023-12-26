import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaArrowUp } from "react-icons/fa";
import { Dropdown } from "flowbite-react";

const options = {
  chart: {
    height: "100%",
    width: "100%",
    type: "bar",
    fontFamily: "Poppins, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "12px",
      colors: ["#fff"],
    },
  },
  stroke: {
    show: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
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
      style: {
        colors: "#777",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#777",
      },
    },
  },
};

const BooksChart = () => {
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
      data: [1500, 1418, 1456, 1526, 1356, 1256, 1345],
    },
    {
      name: `${headings?.currentStart ?? ""} to ${headings?.currentEnd ?? ""}`,
      data: [643, 413, 765, 412, 1423, 1731, 1636],
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
            Added Books : last {days} days
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
          type="bar"
          height={450}
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

export default BooksChart;
