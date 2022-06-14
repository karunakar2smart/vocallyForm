import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Heading from "./Re-Usable/Heading";

const Success = () => {
 const navigate = useNavigate();
 return (
  <div className="container-fluid bg-dark text-white">
   <div className="row  min-vh-100  d-md-flex justify-content-md-center align-items-md-center">
    <div className="col-12 col-md-12 text-center">
     <Heading text="Thank You, Your Form Has Been Submitted Successfully...!" />

     <Button
      onClick={() => navigate("/users")}
      className="mt-5"
      variant="outline-light">
      Click On Here to see all the Users
     </Button>
    </div>
   </div>
  </div>
 );
};

export default Success;
