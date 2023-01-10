import { motion } from "framer-motion";
import { useState } from "react";
import arrow from "../../assets/right-arrow.png";

const Button = ({
  caption,
  className,
  onClick = null,
  errorMsg = "",
  register = false,
  value = "",
}) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <>
      {register && (
        <motion.button
          onHoverStart={() => setIsButtonHovered(true)}
          onHoverEnd={() => setIsButtonHovered(false)}
          value={value}
          onClick={onClick}
          animate={{ y: errorMsg ? -5 : -30 }}
          style={{ backgroundColor: !isButtonHovered ? "#023E8A" : "#124b96" }}
          className={` text-[white] h-14 font-bold text-xl ${className} flex items-center justify-center`}
        >
          {isButtonHovered ? (
            <motion.img
              src={arrow}
              className="w-[2.6rem]"
              animate={{ x: [-15, 0], opacity: [0, 0.5, 1] }}
            />
          ) : (
            caption
          )}
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
