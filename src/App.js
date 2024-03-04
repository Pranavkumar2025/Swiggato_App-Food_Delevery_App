import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
// import Grocery from "./components/Grocery";
import RestrauntMenu from "./components/RestrauntMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(()=>import("./components/Grocery"));//this process is called->{Chunking, CodeSplitting, Dynamic Bundling, lazyLoading, onDemand Loading}


const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </Provider>
  );
};

const AppRouter = createBrowserRouter(
  [
    {
      path: '/',
      children: [
        {
          path: '/',
          element:<Body/>
        },
        {
          path: '/about',
          element:<About/>, 
        },
        {
          path: '/contact',
          element:<ContactUs/>, 
        },
        {
          path: '/grocery',
          element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>, 
        },
        {
          path: '/restaurant/:resId',
          element: <RestrauntMenu/>, 
        }
      ],
      element: <AppLayout/>
    },
   
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
