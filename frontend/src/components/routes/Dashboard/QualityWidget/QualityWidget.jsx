import Circle from "../../../atomic/Circle";
import WorstPoint from "../../../atomic/WorstPoint";
import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";

const QualityWidget = () => {
  const dispatch = useDispatch();

  return (
    <section className="bg-[white] w-[100%]  rounded-md p-[2rem] dark:bg-[#242526] md:w-[65%]">
      <h1 className="text-3xl font-bold dark:text-[white]">
        {dispatch(displayValue("Quality"))}
      </h1>
      <section className="flex flex-row flex-wrap items-center justify-center gap-[3rem] md:flex-nowrap md:gap-[5rem]">
        <Circle grade={8.3} caption={dispatch(displayValue("Excellent"))} />
        <article className="flex flex-col justify-evenly items-start h-[12rem]">
          <div className="text-[red] font-bold ">
            {dispatch(displayValue("Your worst points"))}
          </div>
          <WorstPoint caption={dispatch(displayValue("Price"))} score={3.2} />
          <WorstPoint caption={dispatch(displayValue("Kidness"))} score={10} />
          <WorstPoint caption={dispatch(displayValue("Speed"))} score={5} />
        </article>
      </section>
    </section>
  );
};

export default QualityWidget;
