import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default App;