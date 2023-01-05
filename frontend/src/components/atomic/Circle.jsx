import { displayValue } from "../../store/languageSlice";
import { useDispatch } from "react-redux";

const Circle = ({ grade }) => {
  let circleColor = null;
  let caption = null;
  const dispatch = useDispatch();

  if (grade >= 9) {
    circleColor = "#d000ff";
    caption = "Perfect";
  } else if (grade >= 8) {
    circleColor = "#32aa25";
    caption = "Excellent";
  } else if (grade < 8 && grade >= 5) {
    circleColor = "#FFD166";
    caption = "Good";
  } else if (grade < 5 && grade >= 3) {
    circleColor = "#db3b3b";
    caption = "Bad";
  } else {
    circleColor = "#040202";
    caption = "Horrible";
  }

  return (
    <div
      style={{ backgroundColor: `${circleColor}` }}
      className={`rounded-[50%] w-[13rem] h-[13rem] flex justify-center items-center`}
    >
      <div className="bg-[white] dark:bg-[#242526]  rounded-[50%] w-[10rem] h-[10rem] flex flex-col items-center justify-center">
        <h3 className="font-bold text-2xl dark:text-[white]">{grade}/10</h3>
        <p className="dark:text-[white] text-2xl">
          {dispatch(displayValue(caption))}
        </p>
      </div>
    </div>
  );
};

export default Circle;
