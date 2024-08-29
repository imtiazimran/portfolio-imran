import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layout/Home.tsx";
import LoginPage from "./pages/Auth/login.tsx";
import Dashboard from "./layout/Dashboard.tsx";
import AddProjects from "./pages/Dashboard/AddProjects.tsx";
import UpdateProjects from "./pages/Dashboard/UpdateProjects.tsx";
import ManageProjects from "./pages/Dashboard/ManageProjects.tsx";
import PrivetRoute from "./utils/PrivetRoute.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard />
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        path: "manage-projects",
        element:  <ManageProjects />,
      },
      {
        path: "add-projects",
        element: <AddProjects />,
      },
      {
        path: "update-projects",
        element: <UpdateProjects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
