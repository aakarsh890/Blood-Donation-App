import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            As an administrator, you have full control over the Blood Bank Management System. You can view and manage blood donations, approve or reject blood requests, update inventory levels, and oversee user accounts. Use the options in the dashboard to ensure efficient and safe blood bank operations.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
