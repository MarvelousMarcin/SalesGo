const WorstPoint = ({ caption, score, maxScore }) => {
  const countSize = (score / 10) * 15;

  return (
    <section className="flex flex-row items-center justify-between w-[25rem]">
      <h1 className="font-bold dark:text-[white]">{caption}</h1>
      <article className="flex justify-start w-[15rem]">
        <div
          className={`bg-[#023E8A] font-bold text-xl text-[white]  rounded-2xl text-center p-1`}
          style={{ width: `${countSize}rem` }}
        >
          {score}
        </div>
      </article>
    </section>
  );
};

export default WorstPoint;
