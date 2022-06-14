import React from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import Routers from "./components/Routes/Routes";

const App = () => {
 return (
  <>
   <BrowserRouter>
    <Routers />
   </BrowserRouter>
  </>
 );
};

export default App;
