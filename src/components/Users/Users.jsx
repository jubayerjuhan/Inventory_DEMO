import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/useractions.js";

const Users = ({ title }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.allUsers);

  const dataColumns = ["id", "Name", "Email", "Role"];
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
  users?.forEach((user) => {
    rows.push({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  });

  useEffect(() => {
    dispatch(getAllUsers());
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

export default Users;
