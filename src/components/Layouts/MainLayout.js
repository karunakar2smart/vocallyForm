import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const MainLayout = () => {
 return (
  <div>
   <Header />
   <Outlet />
   <Footer />
  </div>
 );
};

export default MainLayout;
