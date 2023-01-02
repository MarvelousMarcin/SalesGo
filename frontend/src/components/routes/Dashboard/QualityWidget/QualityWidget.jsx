import Circle from "../../../atomic/Circle";
import WorstPoint from "../../../atomic/WorstPoint";
const QualityWidget = () => {
  return (
    <section className="bg-[white] w-[100%]  rounded-md p-[2rem] dark:bg-[#242526] md:w-[65%]">
      <h1 className="text-3xl font-bold dark:text-[white]">Quality</h1>
      <section className="flex flex-row flex-wrap items-center justify-center gap-[3rem] md:flex-nowrap md:gap-[5rem]">
        <Circle grade={8.3} caption={"Excellent"} />
        <article className="flex flex-col justify-evenly items-start h-[12rem]">
          <div className="text-[red] font-bold ">Your worst points</div>
          <WorstPoint caption={"Price"} score={3.2} />
          <WorstPoint caption={"Kidness"} score={10} />
          <WorstPoint caption={"Speed"} score={5} />
        </article>
      </section>
    </section>
  );
};

export default QualityWidget;
