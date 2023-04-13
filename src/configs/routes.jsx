// import Layout from "@/core/layout";
import App from "../App";
import Dashboard from "@/views/dashboard";

export default [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
];
