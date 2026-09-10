import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header/Header";
import Body from "./components/Body/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import About from "./components/About/About";
import ContactUs from "./components/Contact/ContactUs";
import ErrorComp from "./components/ErrorComp";
import RestaurantMenu from "./components/resMenu";

//chunking
//code splitting
//Dynamic bundling

const Grocery = lazy(() => import("./components/Grocery")); //dynamic loading

const About = lazy(() => import("./components/About/About"));

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComp />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
