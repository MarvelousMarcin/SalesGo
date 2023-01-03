import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const OrderCategory = () => {
  let { category } = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (category === "returned") {
      setTitle("Returned");
    } else if (category === "notpaid") {
      setTitle("Not Paid");
    } else if (category === "notdeliv") {
      setTitle("Not Delivered");
    } else {
      setTitle("Unknown");
    }
  }, []);

  return <sercion>{title}</sercion>;
};

export default OrderCategory;
