import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../../actions/orderaction.js";
import { allAdminProducts } from "../../actions/productactions.js";
import { getAllUsers } from "../../actions/useractions.js";
import DoughnutChart from "../Chart/Chart.jsx";
import LineChart from "../Chart/LineChart.js";
import Minicard from "../Minicard/Minicard.jsx";
import "./dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.adminOrders);
  const { allProducts } = useSelector((state) => state.adminProduct);
  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(allAdminProducts());
    dispatch(getAllUsers());
  }, [dispatch]);

  // calculate total price of all orders
  let totalOrderPrice = 0;
  let COD = 0;
  let bkash = 0;
  orders?.forEach((order) => {
    totalOrderPrice += order.priceBreakdown.totalPrice;
    if (order?.paymentInfo?.status === "COD") {
      COD += 1;
    }
    if (order?.paymentInfo?.status === ("bKash" || "bkash")) {
      bkash += 1;
    }
  });

  return (
    <div className="dashBoardWrapper">
      <div className="cardWrapper">
        <Minicard title="Total Sales" amount={totalOrderPrice.toFixed(2)} />
        <Minicard
          nosign
          title="Product Available"
          amount={allProducts?.length}
          icon="fa-brands fa-product-hunt"
        />
        <Minicard
          nosign
          title="Total Users"
          amount={users?.length}
          icon="fa-solid fa-user"
        />
        <Minicard
          nosign
          title="Total Orders"
          amount={orders?.length}
          icon="fa-solid fa-bag-shopping"
        />
      </div>
      <div className="chartAres">
        <DoughnutChart
          data={[COD, bkash]}
          labels={["Cash", "Bkash"]}
          title="Payment Method Used"
        />
        <LineChart title="Each Month Revenue" />
      </div>
    </div>
  );
};

export default Dashboard;
