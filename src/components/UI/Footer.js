import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
 return (
  <footer className="bg-dark">
   <div className="container text-white ">
    <div className="row">
     <div className="col-md-6 col-12">
      <h3 className="copyright text-uppercase">OPENAUTO</h3>
     </div>
     <div className="col-md-6 col-12 text-center">
      <ul className="social-icon list-unstyled  d-inline-flex">
       <li className="me-3 list-style-none">+756 586 4558</li>
       <li className="me-3 list-style-none">service@openauto.ca</li>
      </ul>
     </div>
    </div>
   </div>

   <div className="container text-white mt-3 pb-5">
    <div className="row">
     <div className="col-md-6 col-12">
      <p className="copyright ">Open Auto @all right reserved</p>
     </div>
     <div className="col-md-6 col-12 text-center">
      <ul className="social-icon list-unstyled  d-inline-flex">
       <li className="me-3 list-style-none">
        <FaFacebook size={22} />
       </li>
       <li className="me-3 list-style-none">
        <FaInstagram size={22} />
       </li>
       <li className="me-3 list-style-none">
        <AiFillYoutube size={22} />
       </li>
      </ul>
     </div>
    </div>
   </div>
   {/* <div className="container bg-dark text-white border">
    <div className="row">
     <div className="col-lg-4">
      <h4>About us</h4>
      <p>
       Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem
       Ipsum war der Standard der Branche Lorem Ipsum ist einfach Dummy-Text der
       Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche{" "}
      </p>
     </div>

     <div className="col-md-4">
      <h4>Follow us</h4>
      <ul className="social-icon list-unstyled d-inline-flex">
       <li className="me-3 list-style-none">
        <FaFacebook size={22} />
       </li>
       <li className="me-3 list-style-none">
        <FaInstagram size={22} />
       </li>
       <li className="me-3 list-style-none">
        <AiFillYoutube size={22} />
       </li>
      </ul>
     </div>
    </div>
   </div> */}
  </footer>
 );
};

export default Footer;
