import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Chapters from "./components/Chapters";
import Events from "./components/Events";
import Policy from "./components/Policy";

const App = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Body />,
      },
      {
        path: "/chapters",
        element: <Chapters />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/contact",
        element: <Body />,
      },
      {
        path: "/policy",
        element: <Policy />,
        children: [
          {
            path: "personal",
            element: <Policy />,
          },
          {
            path: "process",
            element: <Policy />,
          },
          {
            path: "share",
            element: <Policy />,
          },
          {
            path: "cookies",
            element: <Policy />,
          },
          {
            path: "social",
            element: <Policy />,
          },
          {
            path: "keep",
            element: <Policy />,
          },
          {
            path: "safe",
            element: <Policy />,
          },
          {
            path: "privacy-rights",
            element: <Policy />,
          },
          {
            path: "controls",
            element: <Policy />,
          },
          {
            path: "california",
            element: <Policy />,
          },
          {
            path: "updates",
            element: <Policy />,
          },
          {
            path: "notice",
            element: <Policy />,
          },
          {
            path: "review",
            element: <Policy />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
