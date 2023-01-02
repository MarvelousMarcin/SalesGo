import Logo from "../../atomic/Logo";
import polandFot from "../../../assets/poland.png";
import lightFot from "../../../assets/night-mode.png";
import quitFot from "../../../assets/sign-out.png";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const logOutHandler = () => {
    dispatch(actions.logOut());
    navigate("/");
  };

  return (
    <nav className="flex flex-row h-[12vh] w-[100vw] justify-between items-center px-[2rem]">
      <Logo />
      <section className="flex flex-row w-[40%] justify-evenly items-center">
        <article className="text-md">Logged as: {userId}</article>
        <img className="w-[2rem] cursor-pointer" src={polandFot} />
        <img className="w-[2rem] cursor-pointer" src={lightFot} />
        <article
          onClick={logOutHandler}
          className="flex flex-row items-center justify-center cursor-pointer"
        >
          <h2 className="font-bold text-md">Log out</h2>
          <img className="w-[3rem] ml-2" src={quitFot} />
        </article>
      </section>
    </nav>
  );
};

export default Nav;
