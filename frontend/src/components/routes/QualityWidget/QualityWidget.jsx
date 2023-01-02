import Circle from "../../atomic/Circle";
import WorstPoint from "../../atomic/WorstPoint";
const QualityWidget = () => {
  return (
    <section className="bg-[white] w-[60%] p-6 m-5 rounded-md ">
      <h1 className="text-3xl font-bold">Quality</h1>
      <section className="flex flex-row items-center justify-center gap-[6rem]">
        <Circle grade={8.3} caption={"Excellent"} />
        <article className="flex flex-col justify-evenly items-start h-[12rem]">
          <div className="text-[red] font-bold">Your worst points</div>
          <WorstPoint caption={"Price"} score={3.2} />
          <WorstPoint caption={"Kidness"} score={10} />
          <WorstPoint caption={"Speed"} score={5} />
        </article>
      </section>
    </section>
  );
};

export default QualityWidget;
