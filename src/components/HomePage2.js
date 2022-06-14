import React from "react";
import { Button } from "react-bootstrap";
import img from "../components/assets/HomePage2.png";
import Heading from "./Re-Usable/Heading";
import SocialIcons from "./UI/SocialIcons";

const HomePage2 = () => {
 return (
  <div className="container-fluid bg-dark  text-white">
   <div className="row  d-md-flex justify-content-md-center align-items-md-center  min-vh-100">
    <div className="col-12 col-md-6  p-4 d-none d-md-block ">
     <img src={img} alt="pickup-image" className="img-responsive w-75 " />
     <SocialIcons />
    </div>

    <div className="container col-12 col-md-6 p-4 p-md-5 h-100 ">
     <Heading
      className="mb-3"
      text="Vehicle Maintainance From The Comfort Of Your Home"
     />
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias a
      magnam sapiente nobis in itaque dolorum error porro doloribus repellendus
      aperiam eaque maiores vitae quis corrupti quam deleniti at quia. Laborum
      dolores amet ipsam? Aut officiis distinctio quo sint?
     </p>
     <Button variant="outline-light p-3 mt-2">Download The Mobile App</Button>
    </div>

    <div className="col-12 col-md-6  p-4 d-block d-md-none text-center">
     <img src={img} alt="pickup-image" className="img-responsive w-75 " />
     <SocialIcons />
    </div>
   </div>
  </div>
 );
};

export default HomePage2;
