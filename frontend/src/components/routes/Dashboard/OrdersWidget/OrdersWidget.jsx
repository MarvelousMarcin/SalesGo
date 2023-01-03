import { useEffect, useState } from "react";
import OrderCount from "../../../atomic/OrderCount";
import { useNavigate } from "react-router-dom";

const DUMMY_DATA = [
  { id: "1-XXX", status: "Not delivered" },
  { id: "1-XXX", status: "Not delivered" },
  { id: "1-XXX", status: "Not delivered" },
  { id: "1-XXX", status: "Returned" },
];

const OrderWidget = () => {
  const navigate = useNavigate();

  const [notPaidCount, setNotPaidCount] = useState(0);
  const [notDeliveredCount, setNotDeliveredCount] = useState(0);
  const [returnedCount, setReturnedCount] = useState(0);
  const [noOrders, setNoOrders] = useState(false);

  useEffect(() => {
    if (DUMMY_DATA.length === 0) {
      setNoOrders(true);
    }

    const returned = DUMMY_DATA.filter(
      (elem) => elem.status === "Returned"
    ).length;
    setReturnedCount(returned);
    const notPaid = DUMMY_DATA.filter(
      (elem) => elem.status === "Not paid"
    ).length;
    setNotPaidCount(notPaid);
    const notDeliv = DUMMY_DATA.filter(
      (elem) => elem.status === "Not delivered"
    ).length;
    setNotDeliveredCount(notDeliv);
  }, []);

  return (
    <section className="bg-[white] w-[100%] p-[2rem]  rounded-md dark:bg-[#242526] md:w-[35%]">
      <h1 className="text-3xl font-bold dark:text-[white]">Orders</h1>
      {noOrders && (
        <div className="flex flex-col items-center justify-center h-[80%]">
          <span className="font-bold">Not orders!</span> You should use options
          to promote your offerts
        </div>
      )}
      {!noOrders && (
        <>
          <OrderCount
            onClick={() => navigate("/order/notpaid")}
            name={"Not paid"}
            count={notPaidCount}
          />
          <OrderCount
            onClick={() => navigate("/order/notdeliv")}
            name={"Not delivered"}
            count={notDeliveredCount}
          />
          <OrderCount
            onClick={() => navigate("/order/returned")}
            name={"Returned"}
            count={returnedCount}
          />
        </>
      )}
    </section>
  );
};

export default OrderWidget;
