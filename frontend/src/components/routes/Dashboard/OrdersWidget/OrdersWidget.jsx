import { useEffect, useState } from "react";
import OrderCount from "../../../atomic/OrderCount";
import { useNavigate } from "react-router-dom";
import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";

const OrderWidget = ({ orders }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notPaidCount, setNotPaidCount] = useState(0);
  const [notDeliveredCount, setNotDeliveredCount] = useState(0);
  const [returnedCount, setReturnedCount] = useState(0);
  const [noOrders, setNoOrders] = useState(false);

  useEffect(() => {
    if (!orders) {
      return setNoOrders(true);
    }

    if (orders.length === 0) {
      return setNoOrders(true);
    }

    setNoOrders(false);
    const returned = orders.filter((elem) => elem.status === "Returned").length;
    setReturnedCount(returned);
    const notPaid = orders.filter((elem) => elem.status === "Not paid").length;
    setNotPaidCount(notPaid);
    const notDeliv = orders.filter(
      (elem) => elem.status === "Not delivered"
    ).length;
    setNotDeliveredCount(notDeliv);
  }, [orders]);

  return (
    <section className="bg-[white] w-[100%] p-[2rem]  rounded-md dark:bg-[#242526] md:w-[35%]">
      <h1 className="text-3xl font-bold dark:text-[white]">
        {dispatch(displayValue("Orders"))}
      </h1>
      {noOrders && (
        <div className="flex flex-col items-center justify-center h-[80%] text-center dark:text-[white]">
          {dispatch(
            displayValue(
              "Not orders. You should use options to promote your offerts."
            )
          )}
        </div>
      )}
      {!noOrders && (
        <>
          <OrderCount
            onClick={() => navigate("/order/notpaid")}
            name={dispatch(displayValue("Not paid"))}
            count={notPaidCount}
          />
          <OrderCount
            onClick={() => navigate("/order/notdeliv")}
            name={dispatch(displayValue("Not delivered"))}
            count={notDeliveredCount}
          />
          <OrderCount
            onClick={() => navigate("/order/returned")}
            name={dispatch(displayValue("Returned"))}
            count={returnedCount}
          />
        </>
      )}
    </section>
  );
};

export default OrderWidget;
