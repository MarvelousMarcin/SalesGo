import Advice from "../../../atomic/Advice";
import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";

const AdviceWidget = ({ advices }) => {
  const dispatch = useDispatch();

  return (
    <section className="w-[98vw] rounded-md dark:bg-[#242526] p-[2rem] h-[30rem] justify-center ml-[1vw] mr-[1vw] mt-[1rem] bg-[white]">
      <h1 className="text-3xl font-bold mr-[2rem] dark:text-[white]">
        {dispatch(displayValue("Sales Daily Advices"))}
      </h1>
      {!advices && (
        <div className="flex flex-col items-center justify-center h-[80%] text-center dark:text-[white]">
          {dispatch(
            displayValue(
              "Not enough orders to create advices for you. Try again later."
            )
          )}
        </div>
      )}
      {advices && (
        <article className="flex flex-col justify-evenly items-center h-[100%]">
          {advices?.map((advice) => (
            <Advice
              key={Math.random()}
              advice={dispatch(displayValue(advice))}
            />
          ))}
        </article>
      )}
    </section>
  );
};

export default AdviceWidget;
