import React from "react";
import Layout from "../../layout/layout";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        <Outlet />
      </div>
    </Layout>
  );
}

export default IndexPage;
