import Nav from "./Nav";
import OrderWidget from "./OrdersWidget/OrdersWidget";
import QualityWidget from "./QualityWidget/QualityWidget";
import ReviewWidget from "./ReviewWidget/ReviewWidget";
import manFot from "../../../assets/man-comp.png";
import AdviceWidget from "./AdviceWidget/AdviceWidget";
import OffertsWidget from "./OffertsWidget/OffertsWidget";

const Dashboard = () => {
  return (
    <section className="w-screen h-[200vh] bg-[#F7F7F7]">
      <Nav />
      <article className="flex flex-row gap-[1vw] w-[98vw] justify-center ml-[1vw]">
        <OrderWidget />
        <QualityWidget />
      </article>
      <OffertsWidget />
      <article className="flex flex-row gap-[1vw] w-[98vw] justify-center ml-[1vw] mr-[1vw] mt-[1rem]">
        <ReviewWidget />
        <div className="bg-[white] rounded-md w-[40%]  flex justify-center items-center">
          <img className="" src={manFot} />
        </div>
      </article>

      <AdviceWidget />
    </section>
  );
};

export default Dashboard;
