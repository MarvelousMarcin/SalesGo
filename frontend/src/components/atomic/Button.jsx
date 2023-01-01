const Button = ({ caption, className }) => {
  return (
    <button
      className={`bg-[#023E8A] text-[white] h-14 font-bold text-xl ${className}`}
    >
      {caption}
    </button>
  );
};

export default Button;
