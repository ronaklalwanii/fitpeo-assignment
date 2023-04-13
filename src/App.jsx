import React from "react";
import { Outlet } from "react-router-dom";

import Layout from "@/core/layout";

import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
