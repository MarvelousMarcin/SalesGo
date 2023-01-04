import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Review from "../../../atomic/Review";
import { useState } from "react";
import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";

const DUMMY_DATA = [
  { score: 3, name: "Marcin Snow", comment: "Very slow" },
  { score: 5, name: "Maciej", comment: "Awensome" },
  { score: 2, name: "Marcin", comment: "Horrible" },
  { score: 4, name: "Harry Potter", comment: "Very slow" },
  {
    score: 5,
    name: "Piotr Nowak",
    comment: "Fast, professional and elegant. I am very happy and satisdied",
  },
  { score: 3, name: "Marcin Snow", comment: "Very slow" },
  { score: 1, name: "Marcin Snow", comment: "Very slow" },
  { score: 2, name: "Marcin Snow", comment: "Very slow" },
  { score: 2, name: "Marcin Snow", comment: "Very slow" },
  { score: 1, name: "Franek", comment: "Very slow" },
  { score: 2, name: "Szymon", comment: "Never Again" },
];

const ReviewWidget = () => {
  const [reviewType, setReviewType] = useState("All");
  let reviews = 0;
  const dispatch = useDispatch();

  return (
    <section className="w-[100%]  bg-[white] rounded-md p-[2rem] dark:bg-[#242526] dark:text-[white] md:w-[60%]">
      <article className="flex items-center mb-[2rem]">
        <h1 className="text-3xl font-bold mr-[2rem] dark:text-[white]">
          {dispatch(displayValue("Reviews"))}
        </h1>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            defaultValue={"All"}
            labelId="demo-select-small"
            id="demo-select-small"
            className="dark:text-[white] border-[white] border-[2px]"
            onChange={(e) => {
              setReviewType(e.target.value);
            }}
          >
            <MenuItem value={"All"}> {dispatch(displayValue("All"))}</MenuItem>
            <MenuItem value={"Positive"}>
              {" "}
              {dispatch(displayValue("Positive"))}
            </MenuItem>
            <MenuItem value={"Negative"}>
              {" "}
              {dispatch(displayValue("Negative"))}
            </MenuItem>
          </Select>
        </FormControl>
      </article>
      <article className="flex flex-col h-[50rem] justify-evenly md:justify-center md:h-[30rem]">
        {DUMMY_DATA.map((item, count) => {
          if (reviewType === "All" && reviews < 5) {
            reviews++;
            return (
              <Review
                score={item.score}
                name={item.name}
                comment={item.comment}
              />
            );
          } else if (reviewType === "Positive" && reviews < 5) {
            if (item.score >= 3) {
              reviews++;

              return (
                <Review
                  score={item.score}
                  name={item.name}
                  comment={item.comment}
                />
              );
            }
          } else {
            if (item.score < 3 && reviews < 5) {
              reviews++;

              return (
                <Review
                  score={item.score}
                  name={item.name}
                  comment={item.comment}
                />
              );
            }
          }
        })}
      </article>
    </section>
  );
};

export default ReviewWidget;
