import Nav from "./Nav";
import OrderWidget from "../OrdersWidget/OrdersWidget";
import QualityWidget from "../QualityWidget/QualityWidget";
const Dashboard = () => {
  return (
    <section className="w-screen h-screen bg-[#F7F7F7]">
      <Nav />
      <article className="flex flex-row">
        <OrderWidget />
        <QualityWidget />
      </article>
    </section>
  );
};

export default Dashboard;
