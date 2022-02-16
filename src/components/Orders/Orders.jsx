import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../actions/orderaction.js";

const Orders = ({ title }) => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.adminOrders);

  const dataColumns = [
    "id",
    "Price",
    "Order_Status",
    "Payment_Status",
    "Order_Date",
  ];
  const columns = [];
  const rows = [];
  dataColumns?.forEach((column) => {
    columns.push({
      field: column.toLowerCase(),
      headerName: column,
      flex: 1,
    });
  });

  // rows
  orders?.forEach((order) => {
    const date = new Date();
    rows.push({
      id: order._id,
      price: `$${order.priceBreakdown.totalPrice}`,
      order_status: order.orderStatus,
      payment_status: order.paymentInfo.status,
      order_date: date.toDateString(order.createdAt, "mm/dd/yyyy"),
    });
  });

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div className="datagrid__pageWrapper">
      <h1>{title}</h1>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Orders;
