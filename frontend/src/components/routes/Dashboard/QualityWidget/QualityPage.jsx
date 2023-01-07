import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";
import back from "../../../../assets/back.png";
import { useNavigate } from "react-router-dom";

const QualityPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="w-[100vw] h-[100vh] bg-[#F7F7F7] p-10">
      <img
        className="w-[2rem]"
        src={back}
        alt="fot"
        onClick={() => navigate("/dashboard")}
      />
      <h1 className="text-3xl">{dispatch(displayValue("Quality"))}</h1>
    </section>
  );
};

export default QualityPage;
