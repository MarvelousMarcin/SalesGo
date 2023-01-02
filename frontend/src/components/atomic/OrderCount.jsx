const OrderCount = ({ name, count }) => {
  return (
    <section className="flex flex-row items-center justify-between p-2">
      <h2 className="text-[1.1rem]">{name}</h2>
      <div className="bg-[#023E8A] text-[white] font-bold text-xl p-4 w-[5rem] text-center">
        {count}
      </div>
    </section>
  );
};

export default OrderCount;
