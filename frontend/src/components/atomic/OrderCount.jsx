import { motion } from "framer-motion";

const OrderCount = ({ name, count, onClick }) => {
  return (
    <section className="flex flex-row items-center justify-between p-2">
      <motion.h2
        whileHover={{ x: 10 }}
        className="text-[1.1rem] cursor-pointer dark:text-[white]"
        onClick={onClick}
      >
        {name}
      </motion.h2>
      <div className="bg-[#023E8A] text-[white] font-bold text-xl p-4 w-[5rem] text-center">
        {count}
      </div>
    </section>
  );
};

export default OrderCount;
