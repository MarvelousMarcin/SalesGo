import Nav from "./Nav";
import OrderWidget from "./OrdersWidget/OrdersWidget";
import QualityWidget from "./QualityWidget/QualityWidget";
import ReviewWidget from "./ReviewWidget/ReviewWidget";
import manFot from "../../../assets/man-comp.png";
import AdviceWidget from "./AdviceWidget/AdviceWidget";
import OffertsWidget from "./OffertsWidget/OffertsWidget";
import ChartWidget from "./ChartWidget/ChartWidget";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const lang = useSelector((state) => state.language.lang);
  const token = useSelector((state) => state.auth.token);
  const [shop, setShop] = useState("Allegro");
  const [isLoading, setIsLoading] = useState(true);
  const [userAspects, setUserAspects] = useState(null);
  const [orders, setOrders] = useState([]);
  const [review, setReview] = useState(null);
  const [offerts, setOfferts] = useState([]);
  const [advices, setAdvices] = useState(null);

  const getData = async () => {
    if (advices && review) {
      return;
    }

    const response = await fetch("http://localhost:4000/get_data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await response.json();

    setUserAspects(data[shop].aspects);
    setOrders(data[shop].orders);
    setReview(data[shop].reviews);
    setOfferts(data[shop].offerts);
    setAdvices(data[shop].advices);
    setIsLoading(false);
  };

  getData();

  return (
    <section className="w-screen  bg-[#F7F7F7] dark:bg-[#18191a]">
      <Nav lang={lang} setShop={setShop} />
      {isLoading && (
        <section className="flex h-[88vh] justify-center items-center">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </section>
      )}
      {!isLoading && (
        <>
          <article className="flex flex-row gap-[1vw] w-[98vw] justify-center ml-[1vw] md: flex-wrap xl:flex-nowrap">
            <OrderWidget orders={orders} isLoading={isLoading} />
            <QualityWidget userAspects={userAspects} />
          </article>
          <OffertsWidget offerts={offerts} />
          <article className="flex flex-row gap-[1vw] w-[98vw] justify-center ml-[1vw] mr-[1vw] mt-[1rem] flex-wrap md:flex-nowrap">
            <ReviewWidget review={review} />
            <div className="bg-[white] rounded-md w-[40%]  flex justify-center items-center dark:bg-[#242526]">
              <img alt="fot" className="" src={manFot} />
            </div>
          </article>
          <ChartWidget orders={orders} />
          <AdviceWidget advices={advices} />
        </>
      )}
    </section>
  );
};

export default Dashboard;
