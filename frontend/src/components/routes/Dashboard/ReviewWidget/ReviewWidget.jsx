import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Review from "../../../atomic/Review";

const ReviewWidget = () => {
  return (
    <section className="w-[100%]  bg-[white] rounded-md p-[2rem] dark:bg-[#242526] dark:text-[white] md:w-[60%]">
      <article className="flex items-center mb-[2rem]">
        <h1 className="text-3xl font-bold mr-[2rem] dark:text-[white]">
          Review
        </h1>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            defaultValue={10}
            labelId="demo-select-small"
            id="demo-select-small"
            className="dark:text-[white] border-[white] border-[2px]"
          >
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Positive</MenuItem>
            <MenuItem value={30}>Negative</MenuItem>
          </Select>
        </FormControl>
      </article>
      <article className="flex flex-col h-[50rem] justify-evenly md:justify-center md:h-[30rem]">
        <Review
          score={5}
          name={"John snow"}
          comment={
            "Fast, professional and elegant. I am very happy and satisdied "
          }
        />

        <Review score={2} name={"Marcin"} comment={"Horrible!!"} />
        <Review
          score={3}
          name={"Janusz Kowalski"}
          comment={"It was just okay!!"}
        />
        <Review
          score={4}
          name={"Frank"}
          comment={
            "Fast, professional and elegant. I am very happy and satisdied "
          }
        />
        <Review
          score={1}
          name={"Harry Potter"}
          comment={"I am very happy and satisdied "}
        />
      </article>
    </section>
  );
};

export default ReviewWidget;
