import moneyFot from "../../assets/money.png";

const Logo = ({ isFixed = "" }) => {
  return (
    <div
      className={`text-3xl text-[#2C2727] flex items-center justify-center ${
        isFixed ? "fixed" : ""
      } top-10 left-10`}
    >
      Sales<span className="text-[#023E8A] font-bold">Go</span>
      <img className="w-[4rem] ml-3" src={moneyFot} alt="foto" />
    </div>
  );
};

export default Logo;
