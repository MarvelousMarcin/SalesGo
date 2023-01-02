import OrderCount from "../../../atomic/OrderCount";

const OrderWidget = () => {
  return (
    <section className="bg-[white] w-[35%] p-[2rem]  rounded-md">
      <h1 className="text-3xl font-bold">Orders</h1>
      <OrderCount name={"Not paid"} count={33} />
      <OrderCount name={"Not delivered"} count={25} />
      <OrderCount name={"Returned"} count={300} />
    </section>
  );
};

export default OrderWidget;
