const Circle = ({ grade, caption }) => {
  return (
    <div className="bg-[#FFD166] rounded-[50%] w-[12rem] h-[12rem] flex justify-center items-center">
      <div className="bg-[white] rounded-[50%] w-[9rem] h-[9rem] flex flex-col items-center justify-center">
        <h3 className="font-bold text-2xl">{grade}</h3>
        <p className=" text-2xl">{caption}</p>
      </div>
    </div>
  );
};

export default Circle;
