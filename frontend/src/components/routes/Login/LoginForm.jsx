import Button from "../../atomic/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/authSlice";
import { motion } from "framer-motion";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(id));
    if (data.token) {
      navigate("/dashboard");
    } else {
      setErrMsg(data.error);
    }
  };

  return (
    <form
      onSubmit={submitLoginHandler}
      className="flex flex-col h-[25rem] justify-evenly"
    >
      <article>
        <h2 className="text-5xl text-[#2C2727]">Login</h2>
        <p className="text-[#767982] text-xl mt-2">Enter your id to continue</p>
      </article>

      <article className="flex flex-col">
        <label>Your id</label>
        <input
          onChange={(e) => setId(e.target.value)}
          className="border-[#767982] border-[1px] rounded-[40px] py-4 px-5 outline-none mt-2"
          type="text"
          value={id}
          placeholder="Enter your salesman id"
        />
      </article>
      <div className="min-h-[2rem] text-center text-[red]">{errMsg}</div>
      <Button caption={"Enter"} register={true} errorMsg={errMsg} />
      <h3 className="flex">
        Don't have salesman id?
        <span className="font-bold text-[#023E8A] ">
          <Link to="/register">
            <motion.div className="ml-2" whileHover={{ scale: 1.03 }}>
              Create it now
            </motion.div>
          </Link>
        </span>
      </h3>
    </form>
  );
};

export default LoginForm;
