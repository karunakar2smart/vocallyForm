import React from "react";
import img from "../components/assets/HomePage1.png";
import HomePage2 from "./HomePage2";
import Form from "./Re-Usable/Form";
import Heading from "./Re-Usable/Heading";
import SocialIcons from "./UI/SocialIcons";

const HomePage = () => {
 return (
  <>
   <div className="container-fluid bg-dark text-white">
    <div className="row  min-vh-100  d-md-flex justify-content-md-center align-items-md-center">
     <div className="col-12 col-md-5 p-4 p-md-5">
      <Heading
       text="Vehicle Maintainance From The Comfort Of Your Home"
       className="mb-5"
      />
      <p className="mb-4">
       Open Auto Soothes the hassle of maintaining your vehicle and helps you
       deal with unexpected repairs worry-free
      </p>
      <Form />
     </div>
     <div className="col-12 col-md-7 p-0 p-md-5 m-0 ">
      <img src={img} alt="pickup-image" className="img-responsive w-100" />
      <SocialIcons />
     </div>
    </div>
   </div>
   <HomePage2 />
  </>
 );
};

export default HomePage;
