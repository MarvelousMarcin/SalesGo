import ideaFot from "../../assets/idea.png";

const Advice = ({ advice }) => {
  return (
    <section className="flex flex-row items-center justify-center gap-[1rem] rounded-3xl bg-[#023E8A] xl:w-[50%] py-[1.5rem] px-[1rem] sm:w-[90%]">
      <img src={ideaFot} />
      <h2 className="text-[white] font-bold">{advice}</h2>
    </section>
  );
};

export default Advice;
