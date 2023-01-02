import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import bar from "../../../../assets/bar-chart.png";
import barWhite from "../../../../assets/bar-chart-white.png";
import line from "../../../../assets/graph.png";
import lineWhite from "../../../../assets/graph-white.png";
import { useSelector } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const ChartWidget = () => {
  const [isBarGraph, setIsBarGraph] = useState(false);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Cycle",
        data: labels.map(() => Math.random()),
        borderColor: "#023E8A",
        backgroundColor: "#023E8A",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "",
      },
    },
  };

  return (
    <section className="w-[98vw] rounded-md p-[2rem] h-[40rem] justify-center ml-[1vw] mr-[1vw] mt-[1rem] dark:bg-[#242526] bg-[white]">
      <article className="flex flex-row items-center">
        <h1 className="text-3xl font-bold mr-[2rem] dark:text-[white]">
          Chart
        </h1>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            defaultValue={10}
            labelId="demo-select-small"
            id="demo-select-small"
            className="dark:text-[white] border-[white] border-[2px]"
          >
            <MenuItem value={10}>Sold items</MenuItem>
            <MenuItem value={20}>Cycle</MenuItem>
          </Select>
        </FormControl>
        <article className="w-[15rem] flex items-center justify-evenly">
          <div
            className={
              isBarGraph &&
              "border-[3px] border-[#023E8A] w-[3rem] h-[3rem] flex items-center rounded-[50%] justify-center"
            }
          >
            <img
              alt="fot"
              className="w-[2rem]  cursor-pointer"
              src={isDarkMode ? barWhite : bar}
              onClick={() => {
                setIsBarGraph(true);
              }}
            />
          </div>
          <div
            className={
              !isBarGraph &&
              "border-[3px] border-[#023E8A] w-[3rem] h-[3rem] flex items-center rounded-[50%] justify-center"
            }
          >
            <img
              alt="fot"
              className="w-[2rem] cursor-pointer"
              src={isDarkMode ? lineWhite : line}
              onClick={() => {
                setIsBarGraph(false);
              }}
            />
          </div>
        </article>
      </article>

      <article className="w-[100%] h-[30rem] flex items-center justify-center">
        {!isBarGraph && <Line options={options} data={data} />}
        {isBarGraph && <Bar options={options} data={data} />}
      </article>
    </section>
  );
};

export default ChartWidget;
