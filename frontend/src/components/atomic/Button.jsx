import { motion } from "framer-motion";

const Button = ({
  caption,
  className,
  onClick = null,
  errorMsg = "",
  register = false,
  value = "",
}) => {
  return (
    <>
      {register && (
        <motion.button
          value={value}
          onClick={onClick}
          animate={{ y: errorMsg ? -5 : -30 }}
          className={`bg-[#023E8A] text-[white] h-14 font-bold text-xl ${className}`}
        >
          {caption}
        </motion.button>
      )}
      {!register && (
        <motion.button
          value={value}
          onClick={onClick}
          className={`bg-[#023E8A] text-[white] h-14 font-bold text-xl ${className}`}
        >
          {caption}
        </motion.button>
      )}
    </>
  );
};

export default Button;
