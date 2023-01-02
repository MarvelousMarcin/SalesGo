import Advice from "../../../atomic/Advice";

const AdviceWidget = () => {
  return (
    <section className="w-[98vw] rounded-md dark:bg-[#242526] p-[2rem] h-[30rem] justify-center ml-[1vw] mr-[1vw] mt-[1rem] bg-[white]">
      <h1 className="text-3xl font-bold mr-[2rem] dark:text-[white]">
        Sales Daily Advices
      </h1>
      <article className="flex flex-col justify-evenly items-center h-[100%]">
        <Advice
          advice={"You are getting more and more negative opinions. Watch out!"}
        />
        <Advice advice={"Product Table is getting more and more popular"} />
      </article>
    </section>
  );
};

export default AdviceWidget;
