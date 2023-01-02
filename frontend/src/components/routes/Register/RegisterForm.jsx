import Button from "../../atomic/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../store/authSlice";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");

  const submitRegisterHandler = async (e) => {
    e.preventDefault();
    const error = await dispatch(register(id));
    if (!error) return navigate("/");
    setErrorMsg(error);
  };

  return (
    <form
      onSubmit={submitRegisterHandler}
      className="flex flex-col justify-evenly items-center h-[24rem]"
    >
      <article className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-[#2C2727]">Create your account</h1>
        <p className="text-xl text-[#767982]">
          Join to our best salesman community
        </p>
      </article>

      <input
        onChange={(e) => setId(e.target.value)}
        className="border-[#767982] border-[1px] rounded-[40px] py-4 px-5 outline-none w-[24rem]"
        type="text"
        value={id}
        placeholder="Enter your new salesman id"
      />
      <motion.div
        animate={{ y: errorMsg ? 0 : "-5px" }}
        className="text-[red] min-h-[1.4rem]"
      >
        {errorMsg}
      </motion.div>
      <Button
        caption="Create"
        className="w-4/6"
        errorMsg={errorMsg}
        register={true}
      />
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
