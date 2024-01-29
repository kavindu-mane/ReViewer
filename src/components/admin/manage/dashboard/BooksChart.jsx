import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import useAxios from "../../../../hooks/useAxios";

const getDate = (date) => {
  let today = new Date();
  today.setDate(today.getDate() - date);
  return (
    today.toLocaleString("default", { month: "long" }) + " " + today.getDate()
  );
};
const BooksChart = () => {
  const [headings] = useState({
    pastStart: getDate(13),
    pastEnd: getDate(7),
    currentStart: getDate(6),
    currentEnd: getDate(0),
  });

  const [chartData, setChartData] = useState({
    past: [0, 0, 0, 0, 0, 0],
    current: [0, 0, 0, 0, 0, 0],
  });
  const [categories, setCategories] = useState([]);
  const axiosPrivateInstance = useAxios();

  const series = [
    {
      name: `${headings?.pastStart ?? ""} to ${headings?.pastEnd ?? ""}`,
      data: chartData.past,
    },
    {
      name: `${headings?.currentStart ?? ""} to ${headings?.currentEnd ?? ""}`,
      data: chartData?.current,
    },
  ];

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
      categories: categories,
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

  useEffect(() => {
    axiosPrivateInstance
      .get(`/admin/dashboard/books/`)
      .then((response) => {
        if (response?.status === 200) {
          if (response?.data !== null) {
            let valuesNew = [];
            let valuesOld = [];
            let categories = [];
            response?.data?.new?.forEach((element) => {
              valuesNew.push(element?.created_count);
            });
            response?.data?.old?.forEach((element) => {
              valuesOld.push(element?.created_count);
              categories.push(element?.day);
            });

            setChartData({ past: valuesOld, current: valuesNew });
            setCategories(categories);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const calculatePercentage = () => {
    return (
      ((chartData?.current?.reduce((a, b) => a + b, 0) ?? 0) /
        (chartData?.past?.reduce((a, b) => a + b, 0) ?? 0)) *
      100
    ).toFixed(2);
  };

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-2xl ring-1 ring-gray-300 drop-shadow-xl dark:bg-gray-800 dark:ring-gray-700 md:p-6">
      <div className="mb-5 flex justify-between">
        <div>
          <h5 className="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">
            {chartData?.current?.reduce((a, b) => a + b, 0) ?? 0}
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Added Books : last 7 days
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-center text-2xl font-semibold text-green-500 dark:text-green-500">
          {calculatePercentage()}%
          {calculatePercentage() > 0 ? <FaArrowUp /> : <FaArrowDown />}
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
    </div>
  );
};

export default BooksChart;
