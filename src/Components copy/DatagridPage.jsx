import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAdminProducts } from "../actions/productactions.js";
import "./datagrid.css";

const DatagridPage = ({ title }) => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.adminProduct);

  const dataColumns = ["Name", "Stock", "Price", "id"];
  const columns = [];
  const rows = [];
  dataColumns.forEach((column) => {
    columns.push({
      field: column.toLowerCase(),
      headerName: column,
      flex: 1,
    });
  });

  // rows
  allProducts.forEach((product) => {
    rows.push({
      id: product._id,
      name: product.name,
      price: `$${product.price}`,
      stock: product.stock,
    });
  });

  useEffect(() => {
    dispatch(allAdminProducts());
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

export default DatagridPage;
