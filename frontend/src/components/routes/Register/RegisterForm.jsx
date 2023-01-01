import Button from "../../atomic/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className="flex flex-col justify-evenly items-center h-[24rem]">
      <article className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-[#2C2727]">Create your account</h1>
        <p className="text-xl text-[#767982]">
          Join to our best salesman community
        </p>
      </article>

      <input
        className="border-[#767982] border-[1px] rounded-[40px] py-4 px-5 outline-none w-[24rem]"
        type="text"
        placeholder="Enter your new salesman id"
      />
      <Button caption="Create" className="w-4/6" />
      <h2>
        Already have account?{" "}
        <span className="font-bold text-[#023E8A]">
          <Link to="/">Log in</Link>
        </span>
      </h2>
    </form>
  );
};

export default RegisterForm;
