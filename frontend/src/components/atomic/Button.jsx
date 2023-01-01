import { motion } from "framer-motion";

const Button = ({ caption, className, errorMsg = "", register = false }) => {
  return (
    <>
      {register && (
        <motion.button
          animate={{ y: errorMsg ? 5 : -30 }}
          className={`bg-[#023E8A] text-[white] h-14 font-bold text-xl ${className}`}
        >
          {caption}
        </motion.button>
      )}
      {!register && (
        <motion.button
          className={`bg-[#023E8A] text-[white] h-14 font-bold text-xl ${className}`}
        >
          {caption}
        </motion.button>
      )}
    </>
  );
};

export default Button;
