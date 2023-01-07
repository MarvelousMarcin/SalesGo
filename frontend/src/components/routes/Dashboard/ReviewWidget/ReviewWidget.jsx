import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Review from "../../../atomic/Review";
import { useState } from "react";
import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ReviewWidget = ({ review }) => {
  const [reviewType, setReviewType] = useState("All");
  let reviews = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="w-[100%]  bg-[white] rounded-md p-[2rem] dark:bg-[#242526] dark:text-[white] md:w-[60%]">
      <article className="flex items-center mb-[2rem]">
        <motion.h1
          whileHover={{
            x: 10,
          }}
          className="text-3xl font-bold mr-[2rem] dark:text-[white] cursor-pointer"
          onClick={() => navigate("/reviews")}
        >
          {dispatch(displayValue("Reviews"))}
        </motion.h1>
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
        {!review && (
          <div className="flex items-center justify-center text-2xl">
            {dispatch(displayValue("No reviews to show."))}
          </div>
        )}
        {review &&
          review?.map((item) => {
            const keyId = Math.random();
            if (reviewType === "All" && reviews < 5) {
              reviews++;
              return (
                <Review
                  key={keyId}
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
                    key={keyId}
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
                    key={keyId}
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
