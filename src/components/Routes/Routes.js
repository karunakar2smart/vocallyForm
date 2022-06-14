import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import MainLayout from "../Layouts/MainLayout";
import Success from "../Success";
import Users from "../Users";

const Routers = () => {
 return (
  <>
   <Routes>
    <Route path="/" element={<MainLayout />}>
     <Route index element={<HomePage />} />
     <Route path="success" element={<Success />} />
     <Route path="users" element={<Users />} />
    </Route>
   </Routes>
  </>
 );
};

export default Routers;
