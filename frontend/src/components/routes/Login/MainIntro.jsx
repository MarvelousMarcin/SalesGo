import manFot from "../../../assets/man.png";
import { motion } from "framer-motion";

const MainIntro = ({ className }) => {
  return (
    <section
      className={`${className} flex flex-col items-center justify-center`}
    >
      <motion.img
        animate={{ y: -50 }}
        transition={{
          ease: "linear",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src={manFot}
        alt="foto"
      />
      <h1 className="text-5xl w-3/5 font-bold text-[white] text-center">
        Control your finance in best possible way
      </h1>
    </section>
  );
};

export default MainIntro;
