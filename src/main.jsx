import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Error from "./components/Error.jsx";
import SectionOne from "./components/SectionOne.jsx";
import SectionTwo from "./components/SectionTwo.jsx";
import SubmittedMessage from "./components/SubmittedMessage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SectionOne />,
      },
      {
        path: "/data",
        element: <SectionTwo />,
      },
    ],
  },
  {
    path: "/SubmittedMessage",
    element: <SubmittedMessage />,
  },
  { path: "*", element: <Error /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  // </React.StrictMode>
);
