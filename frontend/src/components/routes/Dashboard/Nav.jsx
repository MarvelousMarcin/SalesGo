import Logo from "../../atomic/Logo";
import polandFot from "../../../assets/poland.png";
import darkFot from "../../../assets/night-mode.png";
import lightFot from "../../../assets/light-mode.png";
import quitFot from "../../../assets/sign-out.png";
import quitFotWhite from "../../../assets/sign-out-white.png";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { actionsDarkMode } from "../../../store/darkModeSlice";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);
  const logOutHandler = () => {
    dispatch(actions.logOut());
    navigate("/");
  };

  return (
    <nav className="flex flex-row h-[12vh] w-[100vw] justify-between items-center px-[2rem]">
      <Logo />
      <section className="flex flex-row w-[40%] justify-evenly items-center">
        <article className="text-md dark:text-[white]">
          Logged as: {userId}
        </article>
        <img className="w-[2rem] cursor-pointer" src={polandFot} />
        <img
          className="w-[2rem] cursor-pointer"
          src={isDarkMode ? lightFot : darkFot}
          onClick={() => {
            console.log(isDarkMode);

            if (isDarkMode) {
              dispatch(actionsDarkMode.setLightMode());
            } else {
              dispatch(actionsDarkMode.setDarkMode());
            }
          }}
        />
        <article
          onClick={logOutHandler}
          className="flex flex-row items-center justify-center cursor-pointer"
        >
          <h2 className="font-bold text-md dark:text-[white]">Log out</h2>
          <img
            className="w-[3rem] ml-2"
            src={isDarkMode ? quitFotWhite : quitFot}
          />
        </article>
      </section>
    </nav>
  );
};

export default Nav;
