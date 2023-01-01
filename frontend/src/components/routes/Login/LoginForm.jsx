import Button from "../../atomic/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/authSlice";

const LoginForm = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    const test = dispatch(login(id));
    if (test) navigate("/dashboard");
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
      <Button caption={"Enter"} />
      <h3>
        Don't have salesman id?
        <span className="font-bold text-[#023E8A]">
          <Link to="/register"> Create it now</Link>
        </span>
      </h3>
    </form>
  );
};

export default LoginForm;
