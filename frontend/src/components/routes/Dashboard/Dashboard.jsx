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

function createData(name, foto, sold, views, rotation) {
  return { name, foto, sold, views, rotation };
}

const offerts = [
  createData(
    "Mobile internet 2GB",
    "https://www.91-img.com/gallery_images_uploads/1/2/12577884f9b0c66287c790cb131070042ff39405.jpg?tr=h-550,w-0,c-at_max",
    200,
    33,
    60
  ),
  createData(
    "Mobile internet 10GB",
    "https://www.91-img.com/gallery_images_uploads/1/2/12577884f9b0c66287c790cb131070042ff39405.jpg?tr=h-550,w-0,c-at_max",
    321,
    56,
    43
  ),
  createData(
    "IPhone 14",
    "https://www.91-img.com/gallery_images_uploads/1/2/12577884f9b0c66287c790cb131070042ff39405.jpg?tr=h-550,w-0,c-at_max",
    435,
    234,
    43
  ),
  createData(
    "Samsung S15 Pro Max",
    "https://www.91-img.com/gallery_images_uploads/1/2/12577884f9b0c66287c790cb131070042ff39405.jpg?tr=h-550,w-0,c-at_max",
    453,
    44,
    23
  ),
  createData(
    "IPad",
    "https://www.91-img.com/gallery_images_uploads/1/2/12577884f9b0c66287c790cb131070042ff39405.jpg?tr=h-550,w-0,c-at_max",
    123,
    434,
    432
  ),
  createData(
    "Laptop",
    "https://www.91-img.com/gallery_images_uploads/1/2/12577884f9b0c66287c790cb131070042ff39405.jpg?tr=h-550,w-0,c-at_max",
    10,
    434,
    432
  ),
  createData(
    "Table",
    "https://img.muji.net/img/item/4547315892464_02_400.jpg",
    42,
    434,
    432
  ),
  createData(
    "Book",
    "https://www.91-img.com/gallery_images_uploads/1/2/12577884f9b0c66287c790cb131070042ff39405.jpg?tr=h-550,w-0,c-at_max",
    123,
    434,
    432
  ),
  createData(
    "Smartfon",
    "https://www.91-img.com/gallery_images_uploads/1/2/12577884f9b0c66287c790cb131070042ff39405.jpg?tr=h-550,w-0,c-at_max",
    2000,
    434,
    432
  ),
];

const Dashboard = () => {
  const lang = useSelector((state) => state.language.lang);

  return (
    <section className="w-screen  bg-[#F7F7F7] dark:bg-[#18191a]">
      <Nav lang={lang} />
      <article className="flex flex-row gap-[1vw] w-[98vw] justify-center ml-[1vw] md: flex-wrap xl:flex-nowrap">
        <OrderWidget />
        <QualityWidget userAspects={userAspects} />
      </article>
      <OffertsWidget offerts={offerts} />
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
