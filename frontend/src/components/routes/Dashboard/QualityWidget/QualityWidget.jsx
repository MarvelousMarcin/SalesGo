import Circle from "../../../atomic/Circle";
import WorstPoint from "../../../atomic/WorstPoint";
import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const QualityWidget = ({ userAspects }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theWorst = () => {
    let arr = Object.keys(userAspects).map(function (key) {
      return { value: userAspects[key], key: key };
    });
    arr.sort((a, b) => a.value - b.value);

    return [arr[0], arr[1], arr[2]];
  };
  const countAvg = () => {
    let sum = 0;
    for (const [key, value] of Object.entries(userAspects)) {
      sum += value;
    }
    return Math.round(sum / 6, 2);
  };

  return (
    <section className="bg-[white] w-[100%] shadow-md  rounded-md p-[2rem] dark:bg-[#242526] md:w-[65%]">
      <motion.h1
        whileHover={{
          x: 10,
        }}
        className="text-3xl font-bold dark:text-[white] cursor-pointer"
        onClick={() => navigate("/quality")}
      >
        {dispatch(displayValue("Quality"))}
      </motion.h1>
      {!userAspects && (
        <div className="flex text-xl items-center justify-center h-[90%] dark:text-[white]">
          {dispatch(displayValue("Not enough data to calculate your quality."))}
        </div>
      )}
      {userAspects && (
        <section className="flex flex-row flex-wrap items-center justify-center gap-[3rem] md:flex-nowrap md:gap-[5rem]">
          <Circle
            grade={countAvg()}
            caption={dispatch(displayValue("Excellent"))}
          />
          <article className="flex flex-col justify-evenly items-start h-[12rem]">
            <div className="text-[red] font-bold ">
              {dispatch(displayValue("Your worst points"))}
            </div>
            {theWorst().map((item) => (
              <WorstPoint
                key={item.key}
                caption={dispatch(displayValue(item.key))}
                score={item.value}
              />
            ))}
          </article>
        </section>
      )}
    </section>
  );
};

export default QualityWidget;
