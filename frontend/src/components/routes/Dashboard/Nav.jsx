import Logo from "../../atomic/Logo";
import polandFot from "../../../assets/poland.png";
import engFot from "../../../assets/united-kingdom.png";
import quitFot from "../../../assets/sign-out.png";
import quitFotWhite from "../../../assets/sign-out-white.png";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { actionsDarkMode } from "../../../store/darkModeSlice";
import { actionsLanguage } from "../../../store/languageSlice";
import { displayValue } from "../../../store/languageSlice";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Nav = ({ lang, setShop }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);
  const token = useSelector((state) => state.auth.token);
  const logOutHandler = () => {
    dispatch(actions.logOut());
    dispatch(actionsDarkMode.setLightMode());
    navigate("/");
  };

  const getUserId = async () => {
    const response = await fetch("http://localhost:4000/user_data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await response.json();

    dispatch(actions.setUserId(data.id));
  };

  useEffect(() => {
    getUserId();
  }, []);

  return (
    <nav className="flex flex-row h-[12vh] w-[100vw] justify-between items-center px-[2rem]">
      <Logo />
      <section className="flex flex-row w-[70%] justify-evenly items-center">
        <article className="flex flex-row items-center justify-center">
          <h2 className="text-[#2C2727] dark:text-[white]">
            {dispatch(displayValue("Choose shop"))}
          </h2>
          <FormControl
            sx={{ m: 1, minWidth: 120, color: "#242526" }}
            size="small"
          >
            <Select
              defaultValue={"Allegro"}
              className="dark:text-[white] border-[white] border-[2px]"
              onChange={(e) => {
                setShop(e.target.value);
              }}
            >
              <MenuItem value={"Allegro"}>
                <span>Allegro</span>
              </MenuItem>

              <MenuItem value={"Amazon"}>
                <span>Amazon</span>
              </MenuItem>
            </Select>
          </FormControl>
        </article>
        <article className="text-md dark:text-[white] ">
          {dispatch(displayValue("Logged as"))}{" "}
          <span className="font-bold text-xl">{userId}</span>
        </article>
        <img
          alt="fot"
          className="w-[2rem] cursor-pointer "
          src={lang === "ENU" ? engFot : polandFot}
          onClick={() => dispatch(actionsLanguage.switchLanguage())}
        />
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              defaultChecked={isDarkMode ? true : false}
            />
          }
          onClick={() => {
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
          <h2 className="font-bold text-md dark:text-[white]">
            {dispatch(displayValue("Log out"))}
          </h2>
          <img
            className="w-[3rem] ml-2"
            src={isDarkMode ? quitFotWhite : quitFot}
            alt="fot"
          />
        </article>
      </section>
    </nav>
  );
};

export default Nav;
