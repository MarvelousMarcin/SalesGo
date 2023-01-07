import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";
import back from "../../../../assets/back.png";
import { useNavigate } from "react-router-dom";

const OrderCategory = () => {
  let { category } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (category === "returned") {
      setTitle(dispatch(displayValue("Returned")));
    } else if (category === "notpaid") {
      setTitle(dispatch(displayValue("Not paid")));
    } else if (category === "notdeliv") {
      setTitle(dispatch(displayValue("Not delivered")));
    } else {
      setTitle("");
    }
  }, []);

  return (
    <section className="w-[100vw] h-[100vh] bg-[#F7F7F7] p-10">
      <img
        className="w-[2rem]"
        src={back}
        alt="fot"
        onClick={() => navigate("/dashboard")}
      />
      <h1 className="text-3xl">{title}</h1>
    </section>
  );
};

export default OrderCategory;
