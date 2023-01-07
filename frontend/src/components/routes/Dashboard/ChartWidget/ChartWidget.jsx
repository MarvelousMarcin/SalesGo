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
import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";
import Button from "../../../atomic/Button";
import { getValues } from "../../../../utils/createDataSet";
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
import { useEffect, useState } from "react";

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

const ChartWidget = ({ orders }) => {
  const [isBarGraph, setIsBarGraph] = useState(false);
  const [range, setRange] = useState("This year");
  const [sortingType, setSortingType] = useState("Sold items");
  const [values, setValues] = useState(getValues(sortingType, range, orders));
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    setValues(getValues(sortingType, range, orders));
  }, [orders]);

  const createLabels = (range) => {
    if (range === "This week") {
      return [
        dispatch(displayValue("Monday")),
        dispatch(displayValue("Tuesday")),
        dispatch(displayValue("Wednesday")),
        dispatch(displayValue("Thursday")),
        dispatch(displayValue("Friday")),
        dispatch(displayValue("Saturday")),
        dispatch(displayValue("Sunday")),
      ];
    } else if (range === "This year") {
      return [
        dispatch(displayValue("January")),
        dispatch(displayValue("February")),
        dispatch(displayValue("March")),
        dispatch(displayValue("April")),
        dispatch(displayValue("May")),
        dispatch(displayValue("June")),
        dispatch(displayValue("July")),
        dispatch(displayValue("August")),
        dispatch(displayValue("September")),
        dispatch(displayValue("October")),
        dispatch(displayValue("November")),
        dispatch(displayValue("December")),
      ];
    } else if (range === "Today") {
      const arr = [];

      for (let i = 0; i < 25; i++) {
        if (i < 10) {
          arr.push(`0${i}:00`);
        } else {
          arr.push(`${i}:00`);
        }
      }
      return arr;
    }
  };

  const labels = createLabels(range);

  const data = {
    labels,
    datasets: [
      {
        label: `${dispatch(displayValue(sortingType))}`,
        data: values,
        borderColor: "#5a95e3",
        backgroundColor: "#5a95e3",
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
    <section className="w-[98vw] rounded-md p-[2rem] h-[55rem] justify-center ml-[1vw] mr-[1vw] mt-[1rem] dark:bg-[#242526] bg-[white]">
      <article className="flex flex-row items-center">
        <h1 className="text-3xl font-bold mr-[2rem] dark:text-[white]">
          {dispatch(displayValue("Chart"))}
        </h1>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            defaultValue={"Sold items"}
            labelId="demo-select-small"
            id="demo-select-small"
            className="dark:text-[white] border-[white] border-[2px]"
            onChange={(e) => {
              setSortingType(e.target.value);
              setValues(getValues(e.target.value, range, orders));
            }}
          >
            <MenuItem value={"Sold items"}>
              {dispatch(displayValue("Sold items"))}
            </MenuItem>
            <MenuItem value={"Cycle"}>
              {dispatch(displayValue("Cycle"))}
            </MenuItem>
          </Select>
        </FormControl>
        <article className="w-[15rem] flex items-center justify-evenly">
          <div
            className={
              isBarGraph
                ? "border-[3px] border-[#023E8A] w-[3rem] h-[3rem] flex items-center rounded-[50%] justify-center"
                : ""
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

      <article className="flex flex-col items-center">
        <article className="w-[100%] h-[38rem] flex items-center justify-evenly flex-col">
          {!isBarGraph && <Line options={options} data={data} />}
          {isBarGraph && <Bar options={options} data={data} />}
        </article>
        <article className="flex md:w-[40%] items-center justify-evenly mt-[3rem] w-[80%]">
          <Button
            onClick={(e) => {
              setRange(e.target.value);
              setValues(getValues(sortingType, e.target.value, orders));
            }}
            caption={dispatch(displayValue("Today"))}
            value={"Today"}
            className={`w-[7rem] text-[0.9rem] ${
              range === "Today" ? "bg-[#FFD166] text-black" : ""
            }`}
          />
          <Button
            onClick={(e) => {
              setRange(e.target.value);
              setValues(getValues(sortingType, e.target.value, orders));
            }}
            caption={dispatch(displayValue("This week"))}
            value={"This week"}
            className={`w-[7rem] text-[0.9rem] ${
              range === "This week" ? "bg-[#FFD166] text-black" : ""
            }`}
          />
          <Button
            onClick={(e) => {
              setRange(e.target.value);
              setValues(getValues(sortingType, e.target.value, orders));
            }}
            caption={dispatch(displayValue("This year"))}
            value={"This year"}
            className={`w-[7rem] text-[0.9rem] ${
              range === "This year" ? "bg-[#FFD166] text-black" : ""
            }`}
          />
        </article>
      </article>
    </section>
  );
};

export default ChartWidget;
