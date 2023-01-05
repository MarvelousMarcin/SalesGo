import Nav from "./Nav";
import OrderWidget from "./OrdersWidget/OrdersWidget";
import QualityWidget from "./QualityWidget/QualityWidget";
import ReviewWidget from "./ReviewWidget/ReviewWidget";
import manFot from "../../../assets/man-comp.png";
import AdviceWidget from "./AdviceWidget/AdviceWidget";
import OffertsWidget from "./OffertsWidget/OffertsWidget";
import ChartWidget from "./ChartWidget/ChartWidget";
import { useSelector } from "react-redux";

const userAspects = {
  Price: 3,
  Speed: 10,
  Kidness: 10,
  "Service Quality": 2,
  Communication: 2,
  Proffesional: 10,
};

const Dashboard = () => {
  const lang = useSelector((state) => state.language.lang);

  return (
    <section className="w-screen  bg-[#F7F7F7] dark:bg-[#18191a]">
      <Nav lang={lang} />
      <article className="flex flex-row gap-[1vw] w-[98vw] justify-center ml-[1vw] md: flex-wrap xl:flex-nowrap">
        <OrderWidget />
        <QualityWidget userAspects={userAspects} />
      </article>
      <OffertsWidget />
      <article className="flex flex-row gap-[1vw] w-[98vw] justify-center ml-[1vw] mr-[1vw] mt-[1rem] flex-wrap md:flex-nowrap">
        <ReviewWidget />
        <div className="bg-[white] rounded-md w-[40%]  flex justify-center items-center dark:bg-[#242526]">
          <img alt="fot" className="" src={manFot} />
        </div>
      </article>
      <ChartWidget />
      <AdviceWidget />
    </section>
  );
};

export default Dashboard;
